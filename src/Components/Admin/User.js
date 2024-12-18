import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import userimage from './Adminimages/userloginimage.jpg'




const User = () => {
    const [username,setusername] = useState("");
    const [mobile, setmobile] = useState("");
    const [email, setemail] = useState("");
   const navigate=useNavigate()
  

    
 
 
    const logincheck = (e)=>{
        e.preventDefault();

        
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
   
    const Name = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const number =/^[0-9]+$/;
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    let namestatus = false;
    let mobilestatus = false;
    let emailstatus = false;
    
       ////Name validation//
       if (username === ""){
        nameError.innerHTML = ("Please Enter Name");
        
      }else{
        if (username.match(Name)){
          nameError.innerHTML ="";
          namestatus=true;
         
        }else{
          nameError.innerHTML = "Only Charactor"
        }
      }
      /////mobile number validation//
      if (mobile === ""){
        mobileError.innerHTML = ("Please Enter mobile number");
        
      }else{
        if (mobile.match(number)){
          if(mobile.length === 10){
            mobileError.innerHTML = "";
            mobilestatus =true;
         
          }else{
            mobileError.innerHTML = "Only 10 Digits";
          }
        }else{
          mobileError.innerHTML = "Only number";
        }
      }
      ////email
      if (email === ""){
        emailError.innerHTML = ("Please Enter Email Address");
        
      }else{
        if (email.match(mail)){
          emailError.innerHTML ="";
          emailstatus = true;
    
        }   ////Name validation//
        if (username === ""){
          nameError.innerHTML = ("Please Enter Name");
          
        }else{
          if (username.match(Name)){
            nameError.innerHTML ="";
            namestatus=true;
           
          }else{
            nameError.innerHTML = "Only Charactor"
          }
        }
        /////mobile number validation//
        if (mobile === ""){
          mobileError.innerHTML = ("Please Enter mobile number");
          
        }else{
          if (mobile.match(number)){
            if(mobile.length === 10){
              mobileError.innerHTML = "";
              mobilestatus =true;
           
            }else{
              mobileError.innerHTML = "Only 10 Digits";
            }
          }else{
            mobileError.innerHTML = "Only number";
          }
        }
        ////email
        if (email === ""){
          emailError.innerHTML = ("Please Enter Email Address");
          
        }else{
          if (email.match(mail)){
            emailError.innerHTML ="";
            emailstatus = true;
      
          }else{
            emailError.innerHTML = "Please Enter Valid email"
          }
        }
      }
      if(namestatus && mobilestatus && emailstatus){
        
        axios.post("http://localhost:4000/Contact",{username,mobile,email})
        .then(()=>{
            
            toast.success('Logged in!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
               
                });
                
        },2000)
        navigate("*") 
      }else {
        toast.error("please login")
      }
    
    
        
    }
  return (
    <div className='container p-5'>
        
            <ToastContainer/>
            <h2 className='fw-bold text-center text-decoration-underline'>Welcome to the Super Market</h2>
            <div className='row shadow rounded'>
                <div className='col-8 col-lg-6 mx-auto border-end p-5  rounded-4 log'>
        <form onSubmit={logincheck} className='txt-center p-5'  >
            <h2 className='text-center fw-bold'> UserLogin</h2>
                <input type='text' name='username' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} className='form-control form-control mx-auto mb-3 '/>
                <p id='nameError'></p>
                <input type='number' name='modile' placeholder='Enter mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)} className='form-control mx-auto mb-3 '/>
                <p id='mobileError'></p>
                <input type='email' name='email' placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)} className='form-control mb-3 mx-auto w-100'/>
                <p id='emailError'></p>
                <input type='submit' value='login'className='btn btn-danger form-control mb-2 w-50 ' />
            </form>
            </div>
            <div className='col-4'>
                <img src={userimage} className='w-100' alt='userimage'/>

            </div>
            </div> 
    </div>
  )
}

export default User