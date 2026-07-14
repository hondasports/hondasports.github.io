[![nuxt build and deploy](https://github.com/hondasports/hondasports.github.io/actions/workflows/nuxt_build.yml/badge.svg)](https://github.com/hondasports/hondasports.github.io/actions/workflows/nuxt_build.yml)
[![CI](https://github.com/hondasports/hondasports.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/hondasports/hondasports.github.io/actions/workflows/ci.yml)

# Tatsuya Miyamoto Portfolio

フロントエンドエンジニア Tatsuya Miyamoto のポートフォリオサイトです。

https://hondasports.github.io/

## 技術スタック

| カテゴリ | 技術 |
| --- | --- |
| フレームワーク | Nuxt 4 / Vue 3 / TypeScript |
| UI | Nuxt UI 4 |
| CSS | Tailwind CSS 4 |
| アイコン | Material Symbols / Simple Icons |
| ホスティング | GitHub Pages（SSG） |
| パッケージ管理 | pnpm |

## セットアップ

```bash
nvm install
nvm use
corepack enable
corepack prepare pnpm@9.14.4 --activate
pnpm install
```

## 開発・検証

```bash
pnpm dev       # http://localhost:3000
pnpm lint      # ESLint
pnpm build     # プロダクションビルド
pnpm generate  # GitHub Pages向け静的生成
```

## プロジェクト構成

```text
app/
├── app.config.ts            # Nuxt UIテーマ・アイコン設定
├── app.vue                  # UAppルート
├── assets/css/main.css      # Tailwind CSS / カラートークン
├── components/SkillCard.vue # スキル表示
└── pages/index.vue          # ヒーロー、経歴、スキル、制作実績
public/
├── background-hd.png        # ヒーロー背景
└── avatar.png
nuxt.config.ts               # Nuxt、フォント、SEO設定
```

## 機能

- 夕景写真を使ったレスポンシブなヒーロー
- 既存の自己紹介・スキル情報と制作実績
- Suzumemo、GitHub、SNSへの外部リンク
- Nuxt UIによるモバイルスライドオーバーとカラーモード切替
- OGP / Twitter Card / robots.txt

## CI/CD

- PR: ESLint + プロダクションビルド
- `master` push: 静的生成後にGitHub Pagesへデプロイ
- CodeQLによるセキュリティ分析

## ライセンス

Private
