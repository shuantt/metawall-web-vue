/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    textColor: {
      DEFAULT: '#000400',
      primary: '#03438D',
      secondary: '#E2EDFA',
      danger: '#F57375',
      black: '#000400',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Azeret Mono', 'sans-serif'],  // 設置 Azeret Mono 為內文字體
      paytone: ['Paytone One', 'sans-serif'],  // 設置 Paytone One 為標題字體
      serif: ['Georgia', 'serif'],
    },
    colors: {
      primary: {
        DEFAULT: '#03438D', // 主色
        hover: '#03438D',  // 連結 hover 使用同主色
      },
      accent: {
        DEFAULT: '#EEC32A', // 按鈕顏色
        border: '#808080',  // 按鈕邊框灰色
        disabled: '#A8B0B9', // 按鈕 disabled 狀態灰色
      },
      secondary: {
        DEFAULT: '#E2EDFA', // icon 按鈕背景色 (淡藍色)
        hover: '#03438D',  // icon 按鈕 hover 背景色
      },
      danger: {
        DEFAULT: '#F57375', // 錯誤警告色
      },
      black: '#000400',  // 黑色
      white: '#FFFFFF',  // 白色
      gray: {
        bg: '#EFECE7', // 背景灰色 + Navbar menu item hover
        light: '#9B9893', // placeholder 灰色
      },
      decorate: {
        red: '#DE4B63',    // 仿 mac 按鈕 - 紅
        yellow: '#FAA722', // 仿 mac 按鈕 - 黃
        green: '#83C51D',  // 仿 mac 按鈕 - 綠
      },
      shadow: {
        DEFAULT: '#00040029', // 陰影色
      },
    },
  },
  extend: {},
  plugins: [],
}

