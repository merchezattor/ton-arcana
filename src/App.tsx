import { TonConnectButton } from '@tonconnect/ui-react'
import './App.css'
import WebApp from '@twa-dev/sdk'
import { Address } from './Address'

function App() {

  return (
    <>
    <header>
      <TonConnectButton />
    </header>
      <div className="card">
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <h1>TON Arcana</h1>
        <p>
          <Address />
        </p>
      </div>
    </>
  )
}

export default App