import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [productdata,setproductdata] = useState([]);
  
 
 

  useEffect (()=>{
    document.title= "Grocery's"
})
useEffect(() => {
  axios.get("http://localhost:4000/products")
      .then((res) => setproductdata(res.data))
      .catch((err) => console.error("Error fetching data:", err));
}, []);
  return (
    <div className='cardbg container p-5  mt-3 border rounded-4'>
    <h2 className='fw-bold'>My Smart Basket</h2>
    <div className='row' >
      {productdata.map((pro)=>{
        return(
       <div className='col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3'key={pro.id}> 
        
        <div className='card'>
        <NavLink className="nav-link " to={`/details/${pro._id}`}>
          <div className='card-img '>
          
          <img src={pro.image} className='rounded-5 image1 w-100' alt='pro.image'/>
          </div>
          <div className='card-body'>
            <p className='card-text text-decoration-underline'>{pro.company}</p>
            <h6 className='card-title'>{pro.product}</h6>
            <p className='card-text'>₹{pro.price}</p>
            
          </div>
         
  <button className="border-success w-100 border-1 rounded-1 text-center " >
  {pro.kg}<span>-₹{pro.price}-only </span>
</button>

 <span className='fw-bold'>  ₹{pro.price}<span className='text-decoration-line-through text-end' >(₹{pro.normalprice})</span> {pro.offer}%Off</span>
 
 </NavLink>

 <div className='card-footer'>
 <button className="btn btn border-success w-100" >

 <NavLink className="nav-link " to={`/addcart/${pro._id}`}>Addcart</NavLink>
                      
                    </button>
                 
</div>
        </div>

        </div>
        )
      })}
      
      
  
  
</div>
  </div>
  )
}

export default Products