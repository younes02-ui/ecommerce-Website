import { Routes, Route } from 'react-router'
import { useState, useEffect} from 'react'
import axios from 'axios'
import HomePage from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Orders from './pages/orders/Orders'
import Tracking from './pages/Tracking/Tracking'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartItems = async () => { 
    const response = await axios.get('/api/cart-items?expand=product')
     
    setCart(response.data);
    }
    
  getCartItems();

  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart = {cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<Orders cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App
