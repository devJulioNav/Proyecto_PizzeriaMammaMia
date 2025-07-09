import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import CartProvider from './context/CartContext';
import ApiProvider from './context/ApiContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ApiProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
    </ApiProvider>
  </StrictMode>,
  
)
