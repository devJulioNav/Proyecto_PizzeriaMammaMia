import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import CartProvider from './context/CartContext';
import ApiProvider from './context/ApiContext.jsx';
import UserProvider from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProvider>
     <ApiProvider>
      <CartProvider>
       <BrowserRouter>
        <App />
       </BrowserRouter>
      </CartProvider>
     </ApiProvider>
    </UserProvider>
  </StrictMode>,
  
)
