# MetaWall (Work In Progress)

此專案為六角 NodeJS 直播班的最終作業的 Vue 3 版本。由於初次寫前端便使用 Nuxt 3 撰寫，反而未能深入理解 Vue 3 搭配 Vue Router 的語法及其底層運作，因此決定重新撰寫。本次專案除了前端技術外，後端也從 MongoDB 轉為 MySQL 並使用 Sequelize 進行 ORM，以更熟悉 NodeJS 生態系。雖然對 AWS S3 相關技術感興趣，但因為價格考量有所猶豫，最終決定購買私人網域並利用 Cloudflare 的 R2（S3 兼容）來管理圖片，提升讀取速度並增強安全性。

## 產品描述

MetaWall 是一個社群平台專案，具備以下功能：

- 使用者註冊、登入驗證、第三方登入
- 會員貼文、評論與按讚
- 會員追蹤
- 即時聊天
- 圖片上傳

## 技術堆疊 

### 前端

- Vite, Vue 3, Vue Router
- Pinia
- Tailwind CSS

### 後端

- MySql (Sequelize ORM)
- MVC Pattern

### 其他

- OAuth
- WebSocket
- Gmail API
- Cloudflare R2 (圖片存儲)

## 部署

- 前端：部署於 Vercel
- 後端 API：部署於 Zeabur

## 安全性 & 配置

- CORS 限制與 IP 白名單
- API 驗證
- Cloudflare DDoS 保護和 CDN 加速

## 設計稿來源

專案設計稿由 **六角學院 Node.js 班** 提供
