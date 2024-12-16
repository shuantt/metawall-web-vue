<script setup>
import loginImg from '@/assets/images/login-bg.svg'
</script>

<template>
  <div
    class="text-white mx-auto max-w-[869px] flex-col items-center justify-center border-black p-12 md:border-solid lg:mt-40 lg:flex lg:flex-row lg:justify-between lg:space-x-12 lg:border-2 lg:px-12 lg:py-16 lg:shadow-[-8px_8px_0px_0px_#00040029]"
  >
    <div class="mx-auto flex max-w-[350px] flex-col items-center justify-center">
      <img :src="loginImg" alt="" class="pic-auto" />
    </div>
    <div class="mx-auto w-full max-w-[374px] space-y-8 lg:mx-0">
      <div class="text-center">
        <h1 class="font-paytone text-[60px] text-primary">MetaWall</h1>
        <h2 class="text-2xl font-bold leading-none text-black">到元宇宙展開全新社交圈</h2>
      </div>
      <form action="" class="space-y-4">
        <div class="bg-white box-border border-[1px] border-solid border-black px-6 py-4">
          <input type="text" placeholder="Email" class="w-full text-base leading-4" />
        </div>
        <div class="bg-white box-border border-[1px] border-solid border-black px-6 py-4">
          <input type="text" placeholder="Password" class="w-full text-base leading-4" />
        </div>
      </form>
      <div class="space-y-4">
        <button
          class="btn-primary text-white box-border w-full rounded-lg border-[1px] border-solid border-black bg-primary py-4 shadow-[-2px_2px_0px_0px_#000400]"
        >
          登入
        </button>
        <a class="block text-center text-black hover:text-primary">註冊帳號</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
