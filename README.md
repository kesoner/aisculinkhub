# AISCU Link Hub (人工智能應用社連結整合頁)

這是一個為東吳大學人工智慧應用社 (AISCU) 設計的 Link Hub 頁面，整合了社團簡介、社群連結與重要活動入口。專案採用現代化的前端技術棧，強調視覺效果與動畫體驗。

## 🚀 技術棧 (Tech Stack)

-   **核心框架**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **語言**: [TypeScript](https://www.typescriptlang.org/)
-   **樣式**: [Tailwind CSS](https://tailwindcss.com/)
-   **動畫**: [Framer Motion](https://www.framer.com/motion/)
-   **圖標**: [Lucide React](https://lucide.dev/)

## 📂 專案結構 (Project Structure)

```bash
.
├── src/
│   ├── components/         # UI 元件 (ProfileHeader, SocialLinks, LinkCard 等)
│   ├── App.tsx             # 主應用程式入口與佈局
│   ├── constants.ts        # 全站設定檔 (文字、連結、圖片路徑) - **修改內容請在此**
│   ├── types.ts            # TypeScript 型別定義
│   └── index.css           # 全域樣式與 Tailwind 設定
├── public/                 # 靜態資源 (logo 等)
├── vite.config.ts          # Vite 打包設定 (包含單檔輸出設定)
└── package.json            # 專案依賴與腳本
```

## 🛠️ 開發指南 (Development)

### 1. 安裝依賴 (Install Dependencies)

```bash
npm install
```

### 2. 啟動本地開發伺服器 (Start Dev Server)

```bash
npm run dev
```
伺服器將啟動於 `http://localhost:5173`。

### 3. 修改內容 (Update Content)

所有的文字內容、連結與圖片路徑都集中管理於 `src/constants.ts`。若需更新社團資訊或連結，請直接編輯該檔案。

## 📦 建置與部署 (Build & Deploy)

### 一般建置 (Standard Build)
適用於 Vercel, Netlify 或 GitHub Pages。

```bash
npm run build
```
產物位於 `dist/` 資料夾。

### 單一 HTML 檔案建置 (Single File Build)
若需要將整個網站打包成**單一個 `.html` 檔案** (方便直接傳送或無伺服器開啟)：

```bash
npm run build
```
*注意：本專案已配置 `vite-plugin-singlefile`，執行 build 指令後，`dist/index.html` 即為包含所有 JS/CSS/圖片 的完整單一檔案。*

## ⚠️ 注意事項

-   **圖片資源**: 放置於 `public/` 資料夾的圖片 (如 `asc_logo.png`) 在單檔打包模式下會被 Base64 編碼嵌入 HTML 中，請注意圖片檔案大小以免造成 HTML 檔案過大。
