import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { toast, ToastContainer } from 'react-toastify';

const Cart = () => {
  
  const [cartdata,setcartdata] = useState([]);
  const [count,setcount] = useState([]);
 const [selectedProduct, setSelectedProduct] = useState(null);
 

useEffect(()=>{
  axios
  .get('https://supermarketserver-mmhe.onrender.com/cart')
  .then((res) =>{
    setcartdata(res.data)
    console.log(res.data);
    
  })
  .catch((err) => console.error(err));



},[]);

const deleteproduct = (id) => {
axios
  .delete(`https://supermarketserver-mmhe.onrender.com/cart/${id}`)
  .then(() => {
    toast.success("One product is deleted");
    setcartdata((prev) => prev.filter((item) => item._id !== id));
  })
  .catch((err) => {
    console.error(err);
    toast.error("Failed to delete product");
  });
};

const editproduct = (id) => {
const productToEdit = cartdata.find((item) => item._id === id);
if (productToEdit) {
  setSelectedProduct(productToEdit);
  setcount(productToEdit.count);
}
};
  const update = (e) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const updatedData = {
      ...selectedProduct,
      count,
    };
    axios.put(`https://supermarketserver-mmhe.onrender.com/cart/${selectedProduct._id}`, updatedData,)
    .then(() => {
      toast.success("Data Updated!");
      setcartdata((prev) =>
        prev.map((item) =>
          item._id === selectedProduct._id ? updatedData : item
        )
      );
      setSelectedProduct(null);
      setcount(1);
    })
    .catch((err) => {
      console.error(err);
      toast.error("Failed to update product");
    });
};
return (
  <div className='container p-2'>
    <ToastContainer/>
  <div className='row rounded p-2 border border-5 rounded-4 ' >
    {cartdata.map((cart,index)=>{
      return(
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 h-50 mx-auto m-3 p-2 text-center rounded-4' key={index}>
     <div className='card-image m-5' >
        <img src={cart.product.image} className='image1 rounded-4 productimage' alt=''/>
       </div>
        <p className='card-text text-decoration-underline'>{cart.product.company}</p>
          <h6 >{cart.product.product}</h6>
          <span className='card-text'>Price-₹{cart.product.price}</span>
        <span> Quantity-{cart.product.kg}</span>
        <span>Pack of-<span className='fw-bold'>{cart.product.quantity}</span></span>


<span className='fw-bold'>  ₹{cart.product.price}<span className='text-decoration-line-through text-end p-2' >(₹{cart.product.normalprice})</span> {cart.product.offer}%Off</span>


<div>


</div>
<div  className='card-footer'>
 <button onClick={()=>deleteproduct(cart._id)}  className='btn btn-danger bi bi-trash3 me-2 text-center'></button>
 <button onClick={()=>editproduct(cart._id)} data-bs-target="#editproduct" data-bs-toggle="modal" className='btn btn-primary bi bi-pencil  '></button>
              
</div>

      
      
      
</div>
      )
    })}
  </div>
  
  <div className='modal' id ='editproduct'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='text-start'>Edit Product Details</h4>
          </div>
          <div className='modal-body'>
  <form onSubmit={update}>
      <p>product quantity</p>
      <button
                  className="btn btn-danger"
                  onClick={() => setcount((prev) => Math.max(prev - 1, 0))}
                >
                  -
                </button>
                {count}
                <button
                  className="btn btn-success m-2"
                  onClick={() => setcount((prev) => prev + 1)}
                >
                  +
                </button>
      <input type='submit'value="Add Product" className='btn btn-success' data-bs-dismiss="modal"/>
        </form>
        
  </div>
  </div>
  </div>
  
  </div>
  

  

  </div>
)
}
export default Cart
