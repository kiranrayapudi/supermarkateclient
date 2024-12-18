import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Fish = () => {
  const [fishdata,setfishdata] = useState([]);
  useEffect (()=>{
    document.title= "Egg's&Meat"
})
useEffect (()=>{
 axios.get("https://supermarketserver-mmhe.onrender.com/Products")
 .then((res) => {
   const data = res.data.filter((item) => {
     return item.category === "Fish";
   });
   console.log(data);
   setfishdata(data);
 })
 .catch((err) => console.error("Error fetching data:", err));
});

  return (
   
    <div className='row' >
    {fishdata.map((fish)=>{
      return(
     <div className='col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3 mb-4'key={fish._id}> 
      
      <div className='card p-2 h-100 '>
      <NavLink className="nav-link " to={`/details/${fish._id}`}>
        <div className='card-img '>
        
        <img src={fish.image} className='rounded-5 image1 w-100' alt='gro.image'/>
        </div>
        <div className='card-body'>
          <p className='card-text text-decoration-underline'>{fish.company}</p>
          <h6 className='card-title'>{fish.product}</h6>
          <p className='card-text'>₹{fish.price}</p>
          
        </div>
       
<button className="border-success w-100 border-1 rounded-1 text-center " >
{fish.kg}<span>-₹{fish.price}-only </span>
</button>

<span className='fw-bold'>  ₹{fish.price}<span className='text-decoration-line-through text-end' >(₹{fish.normalprice})</span> {fish.offer}%Off</span>

</NavLink>
<div className='card-footer'>
<button className="btn btn border-success w-100" >

<NavLink className="nav-link " to={`/addcart/${fish._id}`}>Addcart</NavLink>
                    
                  </button>
               
</div>
      </div>

      </div>
      )
    })}
    
    


</div>
   
    
  )
}

export default Fish