import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const FruitsVegetables = () => {
  const [fruitsvegitablesdata,setfruitsvegitablesdata] = useState([]);
  useEffect (()=>{
    document.title= "Fruits&Vegetables"
})
useEffect (()=>{
  axios.get("https://supermarketserver-mmhe.onrender.com/Products")
  .then((res) => {
    const data = res.data.filter((item) => {
      return item.category === "FruitsVegitables";
    });
    console.log(data);
    setfruitsvegitablesdata(data);
  })
  .catch((err) => console.error("Error fetching data:", err));
 });
  return (
   <div className='container p-5 cardbg container p-5  mt-3 border rounded-4 '>
    <h3 className='fw-bold text-decoration-underline'>Fruits&Vegetables</h3>
    <div className='row Border' >
    {fruitsvegitablesdata.map((fruitsvegitables)=>{
      return(
     <div className='col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3'key={fruitsvegitables._id}> 
      
      <div className='card p-2 h-100 '>
      <NavLink className="nav-link " to={`/details/${fruitsvegitables._id}`}>
        <div className='card-img '>
        
        <img src={fruitsvegitables.image} className='rounded-5 image1 w-100' alt='gro.image'/>
        </div>
        <div className='card-body'>
          <p className='card-text text-decoration-underline'>{fruitsvegitables.company}</p>
          <h6 className='card-title'>{fruitsvegitables.product}</h6>
          <p className='card-text'>₹{fruitsvegitables.price}</p>
          
        </div>
       
<button className="border-success w-100 border-1 rounded-1 text-center " >
{fruitsvegitables.kg}<span>-₹{fruitsvegitables.price}-only </span>
</button>

<span className='fw-bold'>  ₹{fruitsvegitables.price}<span className='text-decoration-line-through text-end' >(₹{fruitsvegitables.normalprice})</span> {fruitsvegitables.offer}%Off</span>
</NavLink>
<div className='card-footer'>
<button className="btn btn border-success w-100" >

<NavLink className="nav-link " to={`/addcart/${fruitsvegitables._id}`}>Addcart</NavLink>
                    
                  </button>
               
</div>
      </div>

      </div>
      )
    })}
    
    


    </div>
   
 
        <div className='container py-5  text-center Border'>
          <h4>Fresh Vegetables Online</h4>
          <p className='text-start'>A wide variety of options are available 
            in all the categories at one place for purchasing and it is named bigbasket. Here, you can find best options at lower prices, right from fresh fruits, spices,
             dals, seasonings and vegetables to packaged products, meats, personal care products and beverages. Since, green vegetables provide necessary proteins and vitamins to the body, people
              prefer to buy vegetables and consume them, in daily food habits. On the website of BigBasket, you can find the entire vegetables list, which could be found in regular vegetable market.
               At the comfort of your home, you can purchase the fresh vegetables. The prices of each vegetable, when compared with other sellers, will be quite competitive. A separate navigation is provided in order
                to make the customers, make wise decisions, when it comes to purchasing. The options which could be found in the website, include vegetables for kids, Indian vegetables likegourd etc. Buying vegetables online is the best decision and mode the payment can be online. Cash on delivery is available as well. 
                The vegetable prices are affordable and titillate the consumer to re-visit the site and buy their basic needs, as and when required. Instead of standing in very long queues or stuck in the midst of traffic jams for purchasing vegetables, the wise decision is online shopping. Ample amount of time can also be saved. All you need to do is to just add all the vegetables, you need, to cart and place your order. Your order will reach out to you very soon at your doorsteps.Vegetables are staple food items that need to be included in our daily diet for the various benefits each of them carry. With schedules getting more hectic by the day, people don’t find time to do their vegetable shopping and cook and thus turn towards fast foods and packaged foods for their meals. This lifestyle will affect our health adversely in the long run. You can now save time and do your grocery shopping through bigbasket’s online store.</p>
          <h4>Types of vegetables</h4>
          <p className='text-start'>
          There are a wide range of Indian vegetables that you can find in the market that you will need. Be it your green vegetables, fiber rich vegetables, exotic vegetables or any green leafy vegetables, you can find it on bigbasket. While there are several concerns regarding the pesticides and toxicants used to grow these produces, it is important to pick your fresh vegetables from well-known sources and vendors to get healthy vegetables. There are several organic vendors present in the market to lean on for your source of fresh vegetables and fruits.</p>
           <h4>Benefits of eating vegetables</h4>
          <p className='text-start'>
          Vegetables brought from bigbasket are as fresh as buying them from the farm directly and can also be eaten raw, rather than just using them as cooking vegetables. Each of the vegetable categories have their own nutritional value. Green vegetables are often high in protein and provide the vitamins required by the body, leafy vegetables are rich in fiber and minerals. When it comes to exotic vegetables in India, broccoli and kale are some of the popular ones that people are often in search of. Food is prone to spoilage when piled up in large piles in the supermarket, market or any grocery store around you. Carefully picking and choosing ripe and healthy ones among many rotten ones is a task by itself. This tedious step can be skipped when shopping online on bigbasket. Our delivery system includes completely neat packaging and safe and hygienic storing and delivery conditions. You can find all types of vegetables that available in the market on bigbaskets online store as well. Seasonal vegetables such as gourd, radish and okra can also be brought freshly when its in-season. It is important to be aware that eating seasonal foods is a key to healthier living as it is assured the food is not preserved via artificial means.

The season of mangoes is here, shop for juicy alphonso mangoes online from bigbasket. Learn which months are mango season in India using this infographic.
What if we could show a little love for mangoes, by planting one of its seeds? Learn how to grow mango tree from seed.
To make safe and healthier choices, order online on bigbasket and have it delivered to your house.
          </p>
        </div>
       
        </div>
  )
}

export default FruitsVegetables