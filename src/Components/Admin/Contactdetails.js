import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Contactdetails = () => {
  const [user,setuser] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/Contact')
    .then((res)=>setuser(res.data))
    .catch((err)=>console.log(err))
  }
 
 )
 const deletecontact = (id)=> {
  axios.delete(`http://localhost:4000/Contact/${id}`)
  .then(()=>toast("One user id is deleted"))
  .catch((err)=>console.log(err))
  
 
  }
  return (
    <div>
      <h2 className='fw-bold text-decoration-underline'><span className='bi bi-person-circle'></span>User Login details</h2>
      <ToastContainer/>
      <table className='table table-bordered'>
        <thead className='table-dark '>
          <tr>
            <th>No.of</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Delete</th>
           
  
          </tr>
        </thead>
        <tbody>
          {user.map((contact,index)=>{
             return(
              <tr key={contact._id}>
                <td>{index + 1}</td>
               < td>{contact.username}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                
                <td>   <button onClick={()=>deletecontact(contact._id)}  className='btn btn-primary bi bi-trash '></button>
                </td>
                
              </tr>
             )
            }
            )
             }
        
        </tbody>
      </table>
    </div>
  )
}

export default Contactdetails