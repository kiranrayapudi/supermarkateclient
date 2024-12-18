import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Grocery from './Components/Header/Body/Grocery'
import Home from './Components/Header/Home'
import Meat from './Components/Header/Body/Meat'
import Fish from './Components/Header/Body/Fish'
import Egg from './Components/Header/Eggs'
import EggsMeat from './Components/Header/Body/EggsMeat'
import FruitsVegetables from './Components/Header/Body/FruitsVegetables'
import Admin from './Components/Header/Admin'
import AdminDashboard from './Components/Header/AdminDashboard'
import Aboutus from './Components/Header/Body/Aboutus'
import Welcome from './Components/Admin/Welcome'
import User from './Components/Admin/User'
import Details from './Components/Admin/Details'
import Addcart from './Components/Admin/Addcart'
import Cart from './Components/Header/Body/Cart'
import Contactdetails from './Components/Admin/Contactdetails'
import AddProducts from './Components/Admin/AddProducts'
import ViewProducts from './Components/Admin/ViewProducts'
import Products from './Components/Admin/Products'







const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path='*' element={<Home/>}/>
          <Route path='/grocery' element={<Grocery/>}/>
          <Route path='/eggsmeat' element={<EggsMeat/>}/>
          <Route path='/egg' element={<Egg/>}/>
          <Route path='/meat' element={<Meat/>}/>
          <Route path='/fish' element={<Fish/>}/>
          <Route path='/fruits&vegetables' element={<FruitsVegetables/>}/>  
          <Route path='/admin' element={<Admin/>}/>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path='/aboutus' element={<Aboutus/>}/>
           <Route path='welcome'element={<Welcome/>}/>
          <Route path='user'element={<User/>}/>
          <Route path='addcart/:_id'element={<Addcart/>}/>
          <Route path='/details/:_id'element={<Details/>}/>
          <Route path='/cart'element={<Cart/>}/>
          <Route path='/addproducts'element={<AddProducts/>}/>
          <Route path='/viewproducts'element={<ViewProducts/>}/>
          <Route path='/contactdetails'element={<Contactdetails/>}/>
          <Route path='/products'element={<Products/>}/>

           
        </Routes>
    </div>
  )
}

export default Routing