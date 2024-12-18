import React, { useState } from 'react'
import Slide1 from './EggsImages/Slide1.webp'
import Slide2 from './EggsImages/Slide2.webp'
import Slide3 from './EggsImages/Slide3.webp'
import { NavLink } from 'react-router-dom'
import Egg from '../Eggs'
import Meat from './Meat'
import Fish from './Fish'


const EggsMeat = () => {
  const [view , setview] = useState("");
  const Dashboardview = () => {
    if (view === "") {
      return <Egg/>
    }else if ( view === "Egg"){
      return <Egg/>
    }else if ( view === "Meat"){
      return <Meat/>
    }else if ( view === "Fish"){
      return <Fish/>
    }
    
  }

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
      

      
       <div className='Border container p-2 '>
       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner Eggs rounded-4">
    <div class="carousel-item active">
      <img src={Slide1} className="d-block w-100 " alt="Slide1"/>
    </div>
    <div className="carousel-item">
      <img src={Slide2} className="d-block w-100" alt="Slide2"/>
    </div>
    <div className="carousel-item">
      <img src={Slide3} className="d-block w-100" alt="Slide3"/>
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

       </div>
       <div>

       </div>
       <div className='Side container p-2 rounded-4 mt-2 Border'>
        <div className='row'>
          <aside className='col-6 col-xl-3 py-5'>
            <h4 className='fw-bold text-decoration-underline text-center'>Shop by Category</h4>
           <button onClick={()=>setview("Egg")} className='border-start border-white rounded-2 m-2 aside' >Eggs</button>
           <button onClick={()=>setview("Meat")} className='border-start border-white rounded-2 m-2 aside'>Meat</button>
           <button onClick={()=>setview("Fish")} className='border-start border-white rounded-2 m-2 aside'>Fish</button>
           <h5>Refined by</h5>
           <div>
  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
</div>

          </aside>
          <div className="col-6 col-xl-9 dashboard">{Dashboardview()}</div>

        </div>
       </div>
       <div className='container p-5 Border '>
        <h4 className='text-center fw-bold text-decoration-underline'>Why choose Super Market <span className='text-danger'>?</span></h4>
        <div className='row '>
          <div className='col-3 back rounded-5 p-4'>
           <h2 className='bi bi-bag-plus-fill text-center rounded-'> </h2>
           <p className='text-center fw-bold'>Quality</p>
           <p className='text-center'>You Can Trust</p>
          </div>
          <div className='col-3 back rounded-5 p-4'>
           <h2 className='bi bi-clock-fill text-center'> </h2>
           <p className='text-center fw-bold '>On Time </p>
           <p className='text-center'>Guarantee</p>
          </div>
          <div className='col-3 back rounded-5 p-5'>
           <h2 className='bi bi-truck text-center'> </h2>
           <p className='text-center fw-bold'>Free Delivery</p>
           
          </div>
          <div className='col-3 back rounded-5 p-4'>
           <h2 className='bi bi-check2-circle text-center'> </h2>
           <p className='text-center fw-bold'>Return Policy</p>
           <p className='text-center'>No Question asked</p>
          </div>
          

        </div>

       </div>
       <div>

       </div>
    </div>
  )
}

export default EggsMeat