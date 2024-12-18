import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import admin from './AdminImages/admin.webp'
import { toast, ToastContainer } from 'react-toastify';

const Admin = () => {
    const [username,setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    
 
    const logincheck = (e)=>{
        e.preventDefault();
        if(username==="kiran9966" && password==="0000"){
            navigate("/admindashboard")
            
           

        }else if(username==="" ){
            toast("please fill the login details")
           
      
        }else if(password==="" ){
            toast("please enter your pin")
           
      
        }else{
            toast("invalid User id")
            navigate("/user")
            
        }
    
        
    }


  return (
   
    <div className='adminbg container rounded-4 '>
        <ToastContainer/>
         <h2 className='fw-bold text-center text-white'>Admin Login</h2>
    <div className='row '>
    <div className='col-12 col-md-6 text-center mb-4 mb-md-0r'>
            <img src={admin} className='adminimage rounded-4 img-fluid' alt='admin'/>
           

        </div>
       
        <div className='col-12 col-sm-10 col-md-6 col-lg-5'>
            <form onSubmit={logincheck}  className='container p-5'>
                <input type='text' name='username' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} className='form-control mb-3 w-50'/>
                <input type='password' name='password' placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)} className='form-control mb-3 w-50'/>
                <input type='submit' value='login'className='btn btn-danger'/>
            </form>
             
        </div>
       
    </div> 
    </div>
  )
}

export default Admin
