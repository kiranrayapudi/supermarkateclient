import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const AddProducts = () => {

    const [category,setcategory]= useState("");
        const [company, setcompany] = useState('');
      const [product,setproduct]=useState("");
      const [image,setimage]= useState("");
      const [normalprice,setnormalprice]=useState("");
      const [price,setprice]=useState("");
      const [description,setdescription]=useState("");
      const [offer,setoffer]=useState("");
      const [kg,setkg]= useState("");
      
      const postproduct =(e)=>{
        e.preventDefault();
        
      
        axios.post("http://localhost:4000/products",{product,image,normalprice,price,offer,kg,company,description,category})
        .then(()=>{
          toast("new product added")
        
         
        })
        
      
      .catch((err)=>console.log(err))
      }
        return (
          <div>
              <div className='col-6 p-2 container border border-white rounded-2'>
                <ToastContainer/>
                <h1>products</h1>
                <form onSubmit={postproduct}>
                <input type='text' name='category' placeholder='category' value={category} onChange={(e)=>setcategory(e.target.value)} className='form-control mb-3 rounded-1'/>
                <input type='text' name='company' placeholder='Company name' value={company} onChange={(e)=>setcompany(e.target.value)} className='form-control mb-3 rounded-1'/>
                <input type='text' name='product' placeholder='product Name' value={product} onChange={(e)=>setproduct(e.target.value)} className='form-control mb-3 rounded-1'/>
                <input type='url' name='image' placeholder='Image'value={image} onChange={(e)=>setimage(e.target.value)} className='form-control mb-3 rounded-1'/>
                <input type='text' name='description' placeholder='description' value={description} onChange={(e)=>setdescription(e.target.value)} className='form-control mb-3 rounded-1'/>
                <input type='number' name='normalprice' placeholder='Normal price' value={normalprice} onChange={(e)=>setnormalprice(e.target.value)}  className='form-control mb-3 rounded-1'/>
                <input type='number' name='price' placeholder='price' value={price} onChange={(e)=>setprice(e.target.value)}  className='form-control mb-3 rounded-1'/>
               <input type='number' name='offer' placeholder='offer' value={offer} onChange={(e)=>setoffer(e.target.value)}  className='form-control mb-3 rounded-1'/>
                <input type="text"id="kg"value={kg}onChange={(e) => setkg(e.target.value)}placeholder="Enter value in kg"  className='form-control mb-3 rounded-1'/>
              <input type='submit'value="Add Product" className='btn btn-success'/>
                </form>
                
              </div>
              
          </div>
        )
      }
      
  
export default AddProducts