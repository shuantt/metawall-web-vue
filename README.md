# MetaWall - Vue 3 (Work In Progress)

此專案為 **《2024 春季 - 六角 Node.js 直播班》** 最終作業的 Vue 3 重製版本。因初次撰寫前後端分離專案就使用 Nuxt 3 框架，反而未嘗試過 Vue 3 搭配 Vue Router，且當時對元件設計的理解亦尚淺，因此決定重新撰寫專案，不依賴 Nuxt 的封裝，並以更模組化的方式進行開發，旨在深入了解 Vue 3 和 Vue Router，提升元件設計的能力。

**前端：** [Repo](https://github.com/shuantt/metawall-web-vue) | Demo (待新增)  
**後端：** [Repo](https://github.com/shuantt/metawall-api-nest)

## 產品描述

MetaWall 是一個社群平台專案，功能包括註冊登入、貼文動態牆、評論/按讚互動、會員追蹤、即時聊天與圖片上傳。

## 設計稿來源

專案設計稿由 **六角學院 Node.js 班** 提供

## 技術堆疊 

此次專案希望嘗試未使用過的技術，除已提及的前端內容外，後端預計使用 Nest 框架搭配 TypeScript 撰寫 API，資料庫則轉為 MySQL 並使用 Sequelize 進行 ORM，以便更熟悉 Node.js 生態系統。雖對學習 AWS S3 有興趣，但考量價格後，選擇 Cloudflare R2（S3 兼容）來管理圖片，提升讀取速度並增強安全性。以下是預計使用的技術，專案完成後會做最終更新：

### 前端
- Vite, Vue 3, Vue Router
- Pinia
- Tailwind CSS

### 後端
- Node.js (NestJS，TypeScript，MVC 架構)
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
