import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/scroll-animations.css'
import './index.css'
import { AppContextProvider } from '@components/Inicio/context/AppContext';
import { App } from 'App';



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);