<script setup>
// 這裡可以加入組件邏輯（如果需要）
</script>

<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="h-screen max-w-[1440px] mg-auto flex flex-col">
    <!-- 頁面標頭 -->
    <header class="flex">
      <h1>My App</h1>
      <ul class="flex space-x-4 ml-auto">
        <li><RouterLink to="/">首頁</RouterLink></li>
        <li><RouterLink to="/login">登入</RouterLink></li>
      </ul>
    </header>

    <!-- 主要內容區 -->
    <main class="flex-grow p-4">
      <slot></slot>
      <!-- 顯示動態頁面內容 -->
    </main>

    <!-- 頁腳 -->
    <footer class="bg-black text-secondary">&copy; 2024 My App</footer>
  </div>
</template>

<style scoped></style>
