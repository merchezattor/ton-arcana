import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk'
import App from './App.tsx'
import './index.css'

WebApp.ready();

createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl="https://mikhail-ukhin.github.io/ton-arcana/tonconnect-manifest.json">
    <StrictMode>
      <App />
    </StrictMode>
  </TonConnectUIProvider>
)
