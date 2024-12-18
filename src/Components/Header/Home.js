import React, { useEffect, useState } from 'react'
import homeslide1 from './images/homeslide1.webp'
import homeslide2 from './images/homeslide2.webp'
import homeimage3 from './images/homeimage3.webp'
import { NavLink } from 'react-router-dom'

import fruits1 from './Homeimages/fruits1.webp'
import fruits2 from './Homeimages/fruits2.webp'
import fruits3 from './Homeimages/fruits3.webp'
import fruits4 from './Homeimages/fruits4.webp'
import axios from 'axios'

const Home = () => {
  const [homedata,sethomedata] = useState([]);
  useEffect (()=>{
    document.title= "Welcome to the SuperMarket"
})
useEffect (()=>{
  axios.get("http://localhost:4000/products")
  .then((res) => {
    const data = res.data.filter((item) => {
      return item.category === "FruitsVegitables";
    });
    console.log(data);
    sethomedata(data);
  })
  .catch((err) => console.error("Error fetching data:", err));
 });

  return (
    <div>
       <div className="dropdown conatiner ms-5 ">
  <NavLink className="btn btn-secondary dropdown-toggle" to="*" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   <span className='bi bi-house-down'>Home</span>
  </NavLink>

  <ul class="dropdown-menu">
  <li><NavLink className="dropdown-item" to="*">Home</NavLink></li>
    <li><NavLink className="dropdown-item" to="/grocery">Grocerys</NavLink></li>
    <li><NavLink className="dropdown-item" href="/eggs">Egg Meat&Fish</NavLink></li>
    <li><NavLink className="dropdown-item" href="/fruits&vegetables">Fruits&vegetables</NavLink></li>
  </ul>
</div>
        <div>
           <div className='container p-2'>
           <div id="carouselExampleAutoplaying" className="carousel slide rounded-4 Home m-2" data-bs-ride="carousel">
  <div className="carousel-inner rounded-4">
    <div className="carousel-item active">
      <img src={homeslide1} className="d-block w-100 " alt="homeslide1"/>
    </div>
    <div className="carousel-item">
      <img src={homeslide2} className="d-block w-100 " alt="homeslide2"/>
    </div>
    <div className="carousel-item">
      <img src={homeimage3} className="d-block w-100 " alt="homesimage3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='row text-center Border'>
  <div className='col-3 '>
  
    <button className='button m-2 btn btn-success w-100'><NavLink className="nav-link fw-bold" to="/eggsmeat">Eggs</NavLink></button>

  </div>
  <div className='col-3'>
    <button className='button m-2 btn btn-warning w-100'><NavLink className="dropdown-item fw-bold text-center" to="/fruits&vegetables">Fruits&Vegetables</NavLink></button>
  </div>
  <div className='col-3'>
    <button className='button m-2 btn btn-info w-100'><NavLink className="nav-link fw-bold" to="/eggsmeat">Fish</NavLink></button>
  </div>
  <div className='col-3'>
    <button className='button m-2 btn btn-primary w-100'><NavLink className="nav-link active  fw-bold " aria-current="page" to="/grocery">Grocery's</NavLink></button>
  </div>

</div>

           </div>
        </div>
        <div className='Side container p-2 rounded-4 '>
          <h4 className='fw-bold m-2'>My Smart Basket</h4>
          <div className='row Border' >
    {homedata.map((home)=>{
      return(
     <div className='col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3'key={home.id}> 
      
      <div className='card'>
      <NavLink className="nav-link " to={`/details/${home._id}`}>
        <div className='card-img '>
        
        <img src={home.image} className='rounded-5 image1 w-100' alt='gro.image'/>
        </div>
        <div className='card-body'>
          <p className='card-text text-decoration-underline'>{home.company}</p>
          <h6 className='card-title'>{home.product}</h6>
          <p className='card-text'>₹{home.price}</p>
          
        </div>
       
<button className="border-success w-100 border-1 rounded-1 text-center " >
{home.kg}<span>-₹{home.price}-only </span>
</button>

<span className='fw-bold'>  ₹{home.price}<span className='text-decoration-line-through text-end' >(₹{home.normalprice})</span> {home.offer}%Off</span>

</NavLink>
<div className='card-footer'>
<button className="btn btn border-success w-100" >

<NavLink className="nav-link " to={`/addcart/${home._id}`}>Addcart</NavLink>
                    
                  </button>
               
</div>
      </div>

      </div>
      )
    })}
    
    


    </div>
   

        </div>
<div className='container p-2 '>
    <h3>Fruits&Vegetables</h3>
    <div className='row'>
      <div className='col-3'>
        <div className="card">
          <NavLink to="/fruits&vegetables">
  <img src={fruits1} className="card-img-top" alt="fruits1"/>
  </NavLink>
</div>

        </div>
        <div className='col-3'>
        <div className="card">
          <NavLink to="/fruits&vegetables">
  <img src={fruits2} className="card-img-top" alt="fruits2"/>
  </NavLink>
</div>

        </div>
        <div className='col-3'>
        <div className="card">
          <NavLink to="/fruits&vegetables">
  <img src={fruits3} className="card-img-top" alt="fruits3"/>
  </NavLink>
</div>

        </div>
        <div className='col-3'>
        <div className="card">
          <NavLink to="/fruits&vegetables">
  <img src={fruits4} className="card-img-top" alt="fruits4"/>
  </NavLink>
</div>

        </div>
     

      </div>

    </div>
    <div className='container-fluid p-2 back rounded-4'>
      <h5 className='fw-bold'>SuperMarket– online grocery store</h5>
      <p>Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, bigbasket.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, bigbasket remains your one-stop shop for daily needs.</p>
      <p>In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.</p>
      <p>We now serve 300+ cities and towns across India and ensure swift delivery times, guaranteeing that all your groceries, snacks and branded foods reach you on time.</p>
       <p>Whether it's a last-minute dinner party or you simply need something urgently, we've got you covered. This service exemplifies our commitment to providing you with not just the widest range of products but also the fastest and most efficient shopping experience, making bigbasket.com the go-to destination for all your immediate grocery needs.</p>
    </div>

  </div>
   
  )
}

export default Home