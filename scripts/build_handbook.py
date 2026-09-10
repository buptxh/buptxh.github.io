#!/usr/bin/env python3
"""Build the handbook's browser data from Markdown files in content/."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content"
OUTPUT_FILE = ROOT / "dist" / "handbook-data.js"


def parse_frontmatter(source: str, path: Path) -> tuple[dict, str]:
    if not source.startswith("---\n"):
        raise ValueError(f"{path}: 缺少以 --- 包围的文件信息")
    try:
        raw_meta, body = source[4:].split("\n---\n", 1)
    except ValueError as exc:
        raise ValueError(f"{path}: 文件信息缺少结束标记 ---") from exc

    meta = {}
    for line_number, line in enumerate(raw_meta.splitlines(), 2):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            raise ValueError(f"{path}:{line_number}: 文件信息应写成 key: value")
        key, raw_value = line.split(":", 1)
        raw_value = raw_value.strip()
        try:
            value = json.loads(raw_value)
        except json.JSONDecodeError:
            value = raw_value
        meta[key.strip()] = value

    for key in ("title", "group", "slug", "order"):
        if key not in meta:
            raise ValueError(f"{path}: 缺少必填字段 {key}")
    if not str(meta["slug"]).startswith("/"):
        raise ValueError(f"{path}: slug 必须以 / 开头")
    return meta, body.strip()


def safe_url(value: str) -> str:
    value = value.strip()
    if re.match(r"(?i)^javascript:", value):
        return "#"
    return html.escape(value, quote=True)


def render_inline(value: str) -> str:
    placeholders: list[str] = []

    def hold(fragment: str) -> str:
        placeholders.append(fragment)
        return f"\x00{len(placeholders) - 1}\x00"

    value = re.sub(
        r"`([^`]+)`",
        lambda match: hold(f"<code>{html.escape(match.group(1))}</code>"),
        value,
    )
    value = html.escape(value, quote=False)
    value = re.sub(
        r"\[([^\]]+)\]\(([^)]+)\)",
        lambda match: hold(
            f'<a href="{safe_url(html.unescape(match.group(2)))}" target="_blank" rel="noopener">'
            f"{match.group(1)}</a>"
        ),
        value,
    )
    value = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", value)
    value = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", value)
    for index, fragment in enumerate(placeholders):
        value = value.replace(f"\x00{index}\x00", fragment)
    return value


def is_table_separator(line: str) -> bool:
    cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
    return bool(cells) and all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells)


def split_table_row(line: str) -> list[str]:
    return [cell.strip() for cell in line.strip().strip("|").split("|")]


def is_block_start(lines: list[str], index: int) -> bool:
    line = lines[index]
    stripped = line.strip()
    if not stripped:
        return True
    if re.match(r"^(#{3,6})\s+", stripped):
        return True
    if re.match(r"^(```|~~~)", stripped):
        return True
    if re.match(r"^([-*+] |\d+[.)] |>\s?)", stripped):
        return True
    if re.fullmatch(r"!\[[^\]]*\]\([^)]+\)", stripped):
        return True
    if stripped.startswith("<"):
        return True
    return index + 1 < len(lines) and "|" in line and is_table_separator(lines[index + 1])


def render_markdown(source: str) -> str:
    lines = source.splitlines()
    output: list[str] = []
    index = 0
    while index < len(lines):
        line = lines[index]
        stripped = line.strip()
        if not stripped:
            index += 1
            continue

        fence = re.match(r"^(```|~~~)(.*)$", stripped)
        if fence:
            marker = fence.group(1)
            language = fence.group(2).strip()
            index += 1
            code_lines = []
            while index < len(lines) and not lines[index].strip().startswith(marker):
                code_lines.append(lines[index])
                index += 1
            index += index < len(lines)
            language_attr = f' class="language-{html.escape(language, quote=True)}"' if language else ""
            output.append(f"<pre><code{language_attr}>{html.escape(chr(10).join(code_lines))}</code></pre>")
            continue

        image_match = re.fullmatch(r"!\[([^\]]*)\]\(([^)]+)\)", stripped)
        if image_match:
            figures = []
            while index < len(lines):
                match = re.fullmatch(r"!\[([^\]]*)\]\(([^)]+)\)", lines[index].strip())
                if not match:
                    break
                figures.append(
                    f'<figure><img src="{safe_url(match.group(2))}" alt="{html.escape(match.group(1), quote=True)}" loading="lazy"></figure>'
                )
                index += 1
            single = " image-gallery-single" if len(figures) == 1 else ""
            output.append(f'<div class="image-gallery{single}">{"".join(figures)}</div>')
            continue

        if index + 1 < len(lines) and "|" in line and is_table_separator(lines[index + 1]):
            headers = split_table_row(line)
            index += 2
            rows = []
            while index < len(lines) and "|" in lines[index] and lines[index].strip():
                rows.append(split_table_row(lines[index]))
                index += 1
            width = len(headers)
            rows = [(row + [""] * width)[:width] for row in rows]
            head = "".join(f"<th>{render_inline(cell)}</th>" for cell in headers)
            body = "".join(
                "<tr>" + "".join(f"<td>{render_inline(cell)}</td>" for cell in row) + "</tr>"
                for row in rows
            )
            output.append(f'<div class="table-wrap"><table class="info-table"><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
            continue

        list_match = re.match(r"^([-*+] |\d+[.)] )(.*)$", stripped)
        if list_match:
            ordered = list_match.group(1)[0].isdigit()
            tag = "ol" if ordered else "ul"
            items = []
            while index < len(lines):
                match = re.match(r"^([-*+] |\d+[.)] )(.*)$", lines[index].strip())
                if not match or match.group(1)[0].isdigit() != ordered:
                    break
                items.append(f"<li>{render_inline(match.group(2))}</li>")
                index += 1
            output.append(f"<{tag}>{''.join(items)}</{tag}>")
            continue

        if stripped.startswith(">"):
            quote_lines = []
            while index < len(lines) and lines[index].strip().startswith(">"):
                quote_lines.append(lines[index].strip()[1:].lstrip())
                index += 1
            output.append(f"<blockquote><p>{render_inline(' '.join(quote_lines))}</p></blockquote>")
            continue

        heading = re.match(r"^(#{3,6})\s+(.+)$", stripped)
        if heading:
            level = len(heading.group(1))
            output.append(f"<h{level}>{render_inline(heading.group(2))}</h{level}>")
            index += 1
            continue

        if stripped.startswith("<"):
            raw_lines = []
            while index < len(lines) and lines[index].strip():
                raw_lines.append(lines[index])
                index += 1
            output.append("\n".join(raw_lines))
            continue

        paragraph = []
        while index < len(lines) and lines[index].strip() and not (paragraph and is_block_start(lines, index)):
            current = lines[index].strip()
            paragraph.append(render_inline(current))
            index += 1
        output.append(f"<p>{' '.join(paragraph)}</p>")

    return "".join(output)


def slugify(value: str, fallback: str) -> str:
    value = re.sub(r"[^\w\u4e00-\u9fff-]+", "-", value.lower()).strip("-")
    return value or fallback


def markdown_search_text(body: str) -> str:
    value = re.sub(r"!\[([^\]]*)\]\([^)]+\)", r"\1", body)
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = re.sub(r"```.*?```|~~~.*?~~~", " ", value, flags=re.S)
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"[#>*_`{}|~-]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def parse_sections(body: str, title: str) -> list[list[str]]:
    sections: list[list[str]] = []
    current_title = "正文"
    current_id = "content"
    current_lines: list[str] = []
    seen_heading = False

    def flush() -> None:
        nonlocal current_lines
        content = "\n".join(current_lines).strip()
        if content:
            sections.append([current_id, current_title, render_markdown(content)])
        current_lines = []

    for line in body.splitlines():
        match = re.match(r"^##\s+(.+?)(?:\s+\{#([^}]+)\})?\s*$", line)
        if match:
            flush()
            seen_heading = True
            current_title = match.group(1).strip()
            current_id = match.group(2) or slugify(current_title, f"section-{len(sections) + 1}")
        else:
            current_lines.append(line)
    flush()
    if not sections:
        sections = [["content", title if not seen_heading else current_title, "<p>内容待补充。</p>"]]
    return sections


def main() -> None:
    if not CONTENT_DIR.exists():
        raise SystemExit("未找到 content 目录")

    pages = []
    slugs = set()
    for path in sorted(CONTENT_DIR.rglob("*.md")):
        meta, body = parse_frontmatter(path.read_text(encoding="utf-8"), path)
        slug = str(meta["slug"])
        if slug in slugs:
            raise ValueError(f"{path}: slug 重复：{slug}")
        slugs.add(slug)
        pages.append({
            "group": str(meta["group"]),
            "slug": slug,
            "title": str(meta["title"]),
            "order": float(meta["order"]),
            "search": markdown_search_text(body),
            "sections": parse_sections(body, str(meta["title"])),
            "_path": path.as_posix(),
        })

    pages.sort(key=lambda page: (page["order"], page["_path"]))
    for page in pages:
        page.pop("order")
        page.pop("_path")
    if not pages:
        raise ValueError("content 目录中没有 Markdown 文件")

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        "window.HANDBOOK_PAGES = " + json.dumps(pages, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"已生成 {len(pages)} 个页面：{OUTPUT_FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
