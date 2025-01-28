import React from 'react'
import Products from './Components/Products'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
