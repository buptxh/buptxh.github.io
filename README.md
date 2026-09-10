# 北京邮电大学2026新生手册

这是一个由 Markdown 驱动的静态文档网站。每篇 Markdown 对应一个网页；侧边栏、页内目录、全文搜索和前后翻页会在构建时自动生成。

## 修改内容

所有正文都在 `content/` 目录中，并按一级分组放在不同文件夹里。图片位于 `dist/assets/handbook/`。

- 修改网页：直接编辑对应的 `.md` 文件。
- 新增网页：复制一个现有 `.md` 文件，修改文件头和正文。
- 删除网页：删除对应的 `.md` 文件。
- 调整顺序：修改文件头中的 `order` 数字，数字越小越靠前。
- 调整侧边栏分组：修改 `group`；同名 `group` 会归入同一个一级标题。

每个 Markdown 文件以以下信息开头：

```markdown
---
title: "页面标题"
group: "01 一级标题"
slug: "/handbook/example"
order: 10
---

## 第一个小节 {#first-section}

这里编写正文，支持段落、链接、粗体、列表、表格和图片。

![图片说明](./assets/handbook/example.png)
```

注意：每个文件的 `slug` 必须唯一，并且以 `/` 开头。二级标题会自动出现在右侧的本页目录中；`{#first-section}` 是可选的固定锚点。

## 本地构建与预览

在项目目录运行：

```powershell
python scripts/build_handbook.py
python -m http.server 4173 --directory dist
```

然后访问 `http://localhost:4173`。

构建脚本会扫描 `content/` 中的所有 Markdown，并生成 `dist/handbook-data.js`。因此不要直接修改该生成文件。

## 发布到 GitHub Pages

推送到 `main` 分支后，GitHub Actions 会自动从 Markdown 重新构建，并发布 `dist/` 目录。无需手动提交构建后的数据也可以完成更新。
