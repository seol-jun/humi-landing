/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // 전역 타이포 스케일 (메인/월드뷰 공통)
        h1: ["60px", { lineHeight: "1.1" }],   // 큰 제목 (ABOUT, OVERVIEW)
        h2: ["40px", { lineHeight: "1.2" }],   // 중간 제목 (What is HUMI?)
        body: ["20px", { lineHeight: "1.6" }], // 본문 기본
      },
      fontWeight: {
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
