
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Ensure the mock service worker is only started in development mode
if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

