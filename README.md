# React + Vite (jest-login)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 🛠️ Pasos para ejecutar el proyecto localmente

### Clona el repositorio

```powershell
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

### Instala las dependencias

```powershell
npm install
```

### (Importante) Inicializa MSW (Mock Service Worker)

Este paso es necesario para poder simular las peticiones del backend en modo desarrollo.

```powershell
npx msw init public/ --save
```

🔁 Este comando debe ejecutarse al menos una vez después de clonar el proyecto, para generar el archivo public/mockServiceWorker.js.

### Inicia el servidor de desarrollo

```poweshell
npm run dev
```

### Abre la app en tu navegador

```cp
http://localhost:5173
```
