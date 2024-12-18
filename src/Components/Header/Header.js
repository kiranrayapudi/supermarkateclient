import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './logo.jpeg'
import { toast, ToastContainer } from 'react-toastify';


const Header = () => {
  const [search,setsearch] = useState("");
  const navigate= useNavigate()
 
  const login = (e)=>{
    e.preventDefault();
   
    if(search==="Eggs" ){
        navigate("/eggsmeat")
       

    }else if(search==="Fruits" ){
      navigate("/fruits&vegetables")
     

  }else if(search==="Grocery" ){
    navigate("/grocery")
   

}else if(search==="Meat" ){
  navigate("/meat")
 

}else if(search==="Fish" ){
  navigate("/fish")
 

}else if(search==="eggs"){
  navigate('/eggsmeat')
}else if (search==="fish"){
  navigate('/fish')
}else if (search==="fruits"){
  navigate('/fruits&vegetables')
}else if (search==="vegitabels"){
  navigate('/fruits&vegetables')
}else if (search==="grocery"){
  navigate('/grocery')
}else if(search==="" ){
 toast("Oops!")
 

}
else{
  toast("This iteam is present out of Stock ")
  }
 
   

    
}

  return ( 
    <div className='Header'>
      <ToastContainer/>
        <div >
       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    <NavLink className="navbar-brand" to="*">
        <img className='logo rounded-4' src={logo} alt='logo ' />
    </NavLink>
    <button className="navbar-toggler bg-white bg-text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
        <NavLink className="nav-link active text-white fw-bold" aria-current="page" to="/grocery">Grocery's</NavLink> 
        </li>
        <li className="nav-item">
          
          <NavLink className="nav-link text-white" to="/eggsmeat">Eggs&Meat</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category's
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/fruits&vegetables">Fruits&Vegetables</NavLink></li>
            <li><NavLink className="dropdown-item" to="/grocery">Grocery's</NavLink></li>
            
            <li><NavLink className="dropdown-item" to="/eggsmeat">EggsMeat&Fish</NavLink></li>
          </ul>
        </li>
        
      </ul>
      <form onSubmit={login} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>setsearch(e.target.value)} aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button className='btn btn-success m-2'>
       
       <NavLink className="nav-link" to="/user">Login <span className="bi bi-person-fill"></span></NavLink>
    
     </button>
      <button className='btn btn-danger m-2'>
       
          <NavLink className="nav-link" to="/admin">Admin <span className="bi bi-person-circle"></span></NavLink>
       
        </button>
        <button className='btn btn-danger m-2'>
       
       <NavLink className="nav-link" to="/cart">Cart <span className='bi bi-cart4'></span></NavLink>
    
     </button>
       
      
      
    </div>
  </div>
</nav>
</div>

    </div>
  )
}

export default Header