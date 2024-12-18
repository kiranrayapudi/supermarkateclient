import React from 'react'
import image from './Aboutimage/image1.webp'
import image1 from './Aboutimage/image4.jpg'


const Aboutus = () => {
  return (
    <div>
        <div className='p-5 container-fluid about rounded-4'>
        <h2 className='text-end'>AboutUs</h2></div>
        <div className='conatinner p-5'>
            
            <div className='row Border rounded-5'>
                <div className='col-8'>

                    <h4 className='text-center'>What is Super Market <span className='text-danger'>?</span></h4>
                    <p>What is SuperMarket.com
bigbasket.com (Innovative Retail Concepts Private Limited) is India’s largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats – we have it all.
Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep, anywhere in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity You can pay online using your debit / credit card or by cash / sodexo on delivery.
We guarantee on time delivery, and the best quality!</p>

                </div>
                <div className='col-4'>
                 <img src={image}  alt='imag'/>

                </div>

            </div>

        </div>
        <div className='container p-2 Border rounded-4'>
            <h4>Why i Choose SperMarket <span className='text-danger'>?</span></h4>
            <div className='row'>
                <div className='col-8'>
                    <p> The Super market allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking, standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep. Food shopping online is now easy as every product on your monthly shopping list, is now available online at bigbasket.com, India’s best online grocery store.</p>
                    <p>We currently offer our services in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity city limits.</p>
                    <h4 className='text-center fw-bold font-monospace'>Happy Shopping</h4>
                </div>
                <div className='col-4'> 
                    <img src={image1} className='abimage' alt='image1'/>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Aboutus