# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-----

vite 테스트용 (해커톤 때 쓸만한 기능은 일단 넣어놓음)

설치 필요 내용 (react 기준) 

- npm create vite@latest <proj name> --template react
- cd <proj name>
- npm install
- npm install react-router-dom
- npm install tailwindcss postcss autoprefixer
- npx tailwindcss init -p

앱 시작

- npm run dev