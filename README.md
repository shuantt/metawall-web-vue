# MetaWall (Work In Progress)

此專案為六角 Node.js 直播班作業的 Vue 3 重製版本。因初次開發前後端分離專案就使用 Nuxt 3 框架，反而未能深入理解 Vue 3 搭配 Vue Router 的語法及其底層運作；當時對元件開發的理解亦尚淺，因此決定重新撰寫，嘗試採用更模組化的寫法，以提升元件設計的能力。

## 產品描述

MetaWall 是一個社群平台專案，功能包括註冊登入、貼文互動、會員追蹤、即時聊天與圖片上傳。

## 設計稿來源

專案設計稿由 **六角學院 Node.js 班** 提供

## 技術堆疊 

此次專案希望嘗試未使用過的技術，除前端已提及外，後端 API 預計使用 Nest 框架，資料庫轉為 MySQL 加上 Sequelize 進行 ORM，以更熟悉 NodeJS 生態系。雖對學習 AWS S3 有興趣，但考量價格後，選擇 Cloudflare R2（S3 兼容）來管理圖片，提升讀取速度並增強安全性。以下是預計使用的技術，專案完成後會做最終更新：

### 前端
- Vite, Vue 3, Vue Router
- Pinia
- Tailwind CSS

### 後端
- Node.js (NestJS，MVC 架構)
- MySql (Sequelize ORM)

### 其他
- OAuth 第三方登入
- WebSocket 即時通訊
- Gmail API 郵件通知
- Cloudflare R2（S3 兼容圖片存儲）

## 部署
- Web：部署於 Vercel
- API & DB：部署於 Zeabur

## 安全性 & 配置
- API 驗證 (包含 CORS 限制與 IP 白名單)
- Cloudflare DDoS 保護和 CDN 加速
