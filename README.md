# AIGC Labs

AIGC Labs 官网，展示 [ChessDB](https://chessdb.aigclabs.cc/) 与[歧路 Diverge](https://chromewebstore.google.com/detail/egiimjkekgiaimaagaljiclacljmdkmo?hl=zh-CN)。纯静态 HTML、CSS 和 JavaScript，不需要构建或安装依赖。

## 本地预览

```sh
python3 -m http.server 4173
```

打开 <http://localhost:4173/>。

## Cloudflare Pages

使用 GitHub 仓库的 `main` 分支。Pages 选择无框架，构建命令留空（或使用 `exit 0`），构建输出目录为 `.`，因为 `index.html` 位于仓库根目录。目标自定义域名：`www.aigclabs.cc`。
