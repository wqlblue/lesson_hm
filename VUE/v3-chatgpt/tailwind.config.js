/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,jsx,tsx}",  //** 是一个通配符，表示任意层级的子目录。 * 是另一个通配符，表示任意文件名。
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

