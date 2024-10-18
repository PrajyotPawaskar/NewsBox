import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react'
const domain = 'dev-yjarhnuq6fd7n4sc.us.auth0.com'
const clientId = 'CUuVdWB4xPs7K0RPpnQ3oVgwPvVisX1X'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </StrictMode>,
)
