import axios from 'axios';
import { useEffect, useState } from 'react';

import { NavLink, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const Addcart = () => {
  const {_id} = useParams();
    const [product,setproduct]=useState([]); 
    const [count,setcount] = useState(0);

    useEffect(() => {
      axios.get(`https://supermarketserver-mmhe.onrender.com/Products/${_id}`)
          .then((res) => setproduct(res.data))
          .catch((err) => {
              console.log(err);
              toast.error("Failed to fetch product details");
          });
  }, [_id]);
 const AddToCart = (e) => {
      e.preventDefault();
   axios.post('https://supermarketserver-mmhe.onrender.com/cart', {
      productId: product._id,
      product:product,
      quantity:count ,
    })
    .then(() => toast ("succesfully added to cart")
  
    )
    }

  return (
    <div>
        <div className='container p-5' >
    <ToastContainer/>
    <h4>{product.company}</h4>
    <h5>{product.product}</h5>
    <NavLink className="nav-link " to={`/details/${product._id}`}>
    <img src={product.image} className='rounded-4 productimage' alt='productimage'/></NavLink>
  <p className='fs-4 fw-bold bi bi-currency-rupee'>Price: {product.price}</p>
    <p className='text-decoration-line-through fs-4 fw-bold'>Price: ${product.normalprice}</p>
   <p className='fs-4 fw-bold Border'>{product.kg}-{product.price}-only</p>
    <p className='fw-bold'>{product.offer}%offer</p>
  <p>product quantity</p>
  <button className='btn btn-danger' onClick={() => setcount((prev) => Math.max(prev - 1, 0))}>-</button>
                {count}
                <button className='btn btn-success' onClick={() => setcount((prev) => prev + 1)}>+</button>
    <button className='btn btn btn-success w-100 p-2  mt-5' onClick={AddToCart} >Add to Cart{count}</button>
    

</div>
    </div>
  )
}

export default Addcart