[![nuxt build and deploy](https://github.com/hondasports/hondasports.github.io/actions/workflows/nuxt_build.yml/badge.svg)](https://github.com/hondasports/hondasports.github.io/actions/workflows/nuxt_build.yml)
[![CI](https://github.com/hondasports/hondasports.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/hondasports/hondasports.github.io/actions/workflows/ci.yml)

# Tatsuya Miyamoto Portfolio

個人ポートフォリオサイト。プログラミングスキル、経歴、プロジェクトを紹介しています。

🔗 **https://hondasports.github.io/**

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | [Nuxt 4](https://nuxt.com/) (Vue 3 + TypeScript) |
| UIコンポーネント | [PrimeVue](https://primevue.org/) (Lara テーマ) |
| CSS | [Tailwind CSS 4](https://tailwindcss.com/) |
| ホスティング | GitHub Pages (SSG) |
| パッケージマネージャ | pnpm |

## セットアップ

```bash
# Node.js バージョン (.nvmrc で管理)
nvm install
nvm use

# pnpm を有効化
corepack enable
corepack prepare pnpm@9.14.4 --activate

# 依存関係インストール
pnpm install
```

## 開発

```bash
# 開発サーバー起動 (http://localhost:3000)
pnpm run dev

# ESLint
pnpm run lint

# ESLint (自動修正)
pnpm run format
```

## ビルド & デプロイ

```bash
# 静的サイト生成 (.output/public → dist)
pnpm run generate

# プロダクションビルド
pnpm run build

# プレビュー
pnpm run preview
```

デプロイは `master` ブランチへの push 時に GitHub Actions で自動実行されます。

## プロジェクト構成

```
├── pages/index.vue          # メインページ
├── components/
│   ├── HeroSection.vue      # ヒーローセクション (100vh)
│   ├── TheNavbar.vue        # スクロール連動ナビバー
│   ├── SkillCard.vue        # スキルカード + プログレスバー
│   ├── AppFooter.vue        # フッター
│   └── sections/            # 各セクションコンポーネント
├── composables/
│   ├── useDarkMode.ts       # ダークモード管理
│   ├── useNavigation.ts     # ナビゲーション
│   └── useScrollAnimation.ts # スクロールアニメーション
├── data/skills.ts           # スキルデータ定義
├── assets/css/main.css      # Tailwind CSS エントリ
└── nuxt.config.ts           # Nuxt 設定
```

## 機能

- **ヒーロー + フルワイドセクション**: モダンなLP風レイアウト
- **ダークモード**: PrimeVue `.p-dark` クラスによるテーマ切り替え
- **レスポンシブ対応**: デスクトップ (ナビバー) / モバイル (Drawer メニュー)
- **スクロールアニメーション**: Intersection Observer によるフェードイン
- **スキルプログレスバー**: 使用年数に応じた視覚的表示
- **SEO最適化**: OGP / Twitter Card メタタグ、robots.txt

## CI/CD

- **PR時**: ESLint + ビルドチェック (`ci.yml`)
- **master push時**: `pnpm generate` → GitHub Pages デプロイ (`nuxt_build.yml`)
- **セキュリティ**: CodeQL 分析 (GitHub Advanced Security)

## ライセンス

Private
