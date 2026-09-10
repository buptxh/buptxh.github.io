# 学生会新生手册

一个无需构建工具的静态文档站，视觉与信息架构参考了 DeepSeek Harness 文档：顶部导航、分组侧栏、页内目录、全文搜索与明暗主题。

## 本地预览

在项目目录运行：

```powershell
python -m http.server 4173 --directory dist
```

然后访问 `http://localhost:4173`。

## 修改内容

- 页面内容与目录：`dist/app.js` 中的 `pages`
- 颜色、字号和布局：`dist/styles.css`
- 站点标题与描述：`dist/index.html`

每个页面由 `group`、`slug`、`title`、`lead` 和 `sections` 组成。复制一个页面对象即可增加新页面。

## 发布到 GitHub Pages

仓库已经包含 `.github/workflows/pages.yml`。上传至 GitHub 后，在仓库的 **Settings → Pages** 中将 Source 设为 **GitHub Actions**；推送到 `main` 分支时会自动发布 `dist` 目录。

发布前请把“待补充”的联系方式、地点和入口替换为本校真实信息。
