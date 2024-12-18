import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'



const Egg = () => {
  const [eggdata,seteggdata] = useState([]);
  useEffect (()=>{
    document.title= "Egg's&Meat"
})
useEffect (()=>{
  axios.get("http://localhost:4000/products")
  .then((res) => {
    const data = res.data.filter((item) => {
      return item.category === "Eggs";
    });
    console.log(data);
    seteggdata(data);
  })
  .catch((err) => console.error("Error fetching data:", err));
});
  return (
   
    <div className='row' >
    {eggdata.map((egg)=>{
      return(
     <div className='col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3  mb-4'key={egg._id}> 
      
      <div className='card p-2 h-100 '>
      <NavLink className="nav-link " to={`/details/${egg._id}`}>
        <div className='card-img '>
        
        <img src={egg.image} className='rounded-5 image1 w-100' alt='gro.image'/>
        </div>
        <div className='card-body'>
          <p className='card-text text-decoration-underline'>{egg.company}</p>
          <h5 className='card-title'>{egg.product}</h5>
          <p className='card-text'>₹{egg.price}</p>
          
        </div>
       
<button className="border-success w-100 border-1 rounded-1 text-center " >
{egg.kg}<span>-₹{egg.price}-only </span>
</button>

<span className='fw-bold'>  ₹{egg.price}<span className='text-decoration-line-through text-end' >(₹{egg.normalprice})</span> {egg.offer}%Off</span>

</NavLink>
<div className='card-footer'>
<button className="btn btn border-success w-100" >

<NavLink className="nav-link " to={`/addcart/${egg._id}`}>Addcart</NavLink>
                    
                  </button>
               
</div>
      </div>

      </div>
      )
    })}
    
    


</div>
   
    
  )
}

export default Egg