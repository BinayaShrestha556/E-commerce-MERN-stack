import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

import Home from "./pages/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Category from "./pages/Category"
import { useState } from "react"
import { CategoryContext } from "./context/categoryContext"
import Product from "./pages/Product"
import LoginSignup from "./pages/LoginSignup"
import Login from "./pages/Login"
import Cart from "./pages/Cart"



function App() {
  const [category,setCategory]=useState("home")
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const [userId,setUserId]=useState("")
  const [cart,setCart]=useState([])
  return (

 <div className="w-full">
  <BrowserRouter>
  <CategoryContext.Provider value={{category,setCategory,isLoggedIn,setIsLoggedIn,userId,setUserId,cart,setCart}}>
    <NavBar/>

    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/women" element={<Category Category="women"/>}/>
      <Route path="/men" element={<Category Category="men"/>}/>
      <Route path="/kids" element={<Category Category="kids"/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/user/signup" element={<LoginSignup/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      

    
    </Routes><Footer/></CategoryContext.Provider>
    </BrowserRouter>
 </div>
  )
}

export default App
