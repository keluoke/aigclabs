# AIGC Labs

AIGC Labs 官网，展示 [ChessDB](https://chessdb.aigclabs.cc/)、[歧路 Diverge](https://chromewebstore.google.com/detail/egiimjkekgiaimaagaljiclacljmdkmo?hl=zh-CN) 与 [NobelSciences](https://nobel.aigclabs.cc/)。页面本身是纯静态 HTML、CSS 和 JavaScript；Wrangler 仅用于部署。

## 本地预览

```sh
cd public
python3 -m http.server 4173
```

在 `public/` 目录下运行，再打开 <http://localhost:4173/>。

## Cloudflare Worker

线上域名 `www.aigclabs.cc` 已绑定到同名 Worker `aigclabs`。`wrangler.jsonc` 指向 `public/` 中的静态文件，并保留现有自定义域名。GitHub 仓库的 `main` 分支用于生产部署。

本地检查部署包：`npm ci && npx wrangler deploy --dry-run`。在 Cloudflare Worker 的 **Settings → Builds** 中连接 `keluoke/aigclabs`，生产分支选择 `main`，部署命令为 `npx wrangler deploy`。
