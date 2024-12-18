import React, { useState } from 'react'

import Welcome from '../Admin/Welcome';


import Contactdetails from '../Admin/Contactdetails';
import AddProducts from '../Admin/AddProducts';
import ViewProducts from '../Admin/ViewProducts';

const AdminDashboard = () => {
  const [View,setview]= useState("");
  const Dashboardview =()=>{
    if(View===""){
    return<Welcome/>
  }else if(View==="AddProducts"){
    return<AddProducts/>
  
  }else if(View==="ViewProducts"){
    return<ViewProducts/>
  
  }

  }
  return (
    <div>
      <div className='container Side rounded-4 shadow  Border'>
        
        <div className='row '>
        <h2 className="fw-bold text-decoration-underline">Admin Dashboard</h2>
          <div className='col-12 col-sm-4 col-md-3 py-5 border-end border-2'>
            <aside>
            <button onClick={() => setview("AddProducts")} className='border-start border-white rounded-2 m-2 aside fw-bold'>Add product's</button>
            <button onClick={() => setview("ViewProducts")} className='border-start border-white rounded-2 m-2 aside fw-bold'>View product's</button>
             >
             
            </aside>

          </div>
          <div className="col-12 col-sm-8 col-md-9 container p-2 text-center">{Dashboardview()}</div>

        </div>
        </div>
    </div>
  )
}

export default AdminDashboard
