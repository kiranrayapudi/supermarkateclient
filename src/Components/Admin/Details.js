import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'



const Details = () => {
  
 

    const {_id} = useParams();
    const [product,setproduct]=useState([]); 
    
    useEffect(()=>{
        axios.get(`https://supermarketserver-mmhe.onrender.com/Products/${_id}`)
      .then((res)=>setproduct(res.data))
      .catch((err)=>console.log(err))
    },[_id]);
    
  return (
    <div className='container p-2 details rounded-4'>
          <div className='row Border'>
            <div className='col-6 col-sm-12 col-md-12'>
            <img src={product.image} className='rounded-4 ' alt=''/>
            </div>
            <div className='col-6 col-sm-12 col-md-12'>

            
            <h1 className='text-decoration-underline'>{product.company}!</h1>
            <h2>{product.product}</h2>
            
          <p className='fs-4 fw-bold bi bi-currency-rupee'>Price: {product.price}</p>
            <p className='text-decoration-line-through fs-4 fw-bold'>Price: ${product.normalprice}</p>
            <span>Regular-price</span>
            <p className='fw-bold'>{product.offer}%offer</p>
            <p className='fs-4 fw-bold'>{product.price}</p>
            <p className='fs-4 fw-bold'>{product.kg}-{product.price}-only</p>
            <NavLink className="nav-item " to={`/addcart/${product._id}`}>
            <button className='btn btn btn-success w-100 p-2  mt-5' >
             Add to Cart
              </button>
              </NavLink>
            
            </div>
          
            </div>
            <h4>About this product</h4>
            <p className='Border p-2'>{product.description}</p>
            <div className='container p-5 Border'>
        <h4 className='text-center fw-bold text-decoration-underline'>Why choose Super Market <span className='text-danger'>?</span></h4>
        <div className='row '>
          <div className='col-3 back rounded-5 p-4 border-end border-5'>
           <h2 className='bi bi-bag-plus-fill text-center rounded-'> </h2>
           <p className='text-center fw-bold'>Quality</p>
           <p className='text-center'>You Can Trust</p>
          </div>
          <div className='col-3 back rounded-5 p-4 border-end border-5'>
           <h2 className='bi bi-clock-fill text-center'> </h2>
           <p className='text-center fw-bold '>On Time </p>
           <p className='text-center'>Guarantee</p>
          </div>
          <div className='col-3 back rounded-5 p-5 border-end border-5'>
           <h2 className='bi bi-truck text-center'> </h2>
           <p className='text-center fw-bold'>Free Delivery</p>
           
          </div>
          <div className='col-3 back rounded-5 p-4 border-end border-5'>
           <h2 className='bi bi-check2-circle text-center'> </h2>
           <p className='text-center fw-bold'>Return Policy</p>
           <p className='text-center'>No Question asked</p>
          </div>
          

        </div>

       </div>
       
        </div>
  )
}


  
export default Details
