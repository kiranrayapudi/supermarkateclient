import React from 'react'
import Admin from './Adminimages/Admin.jpg'

const Welcome = () => {
  return (
    <div>
        <div className='container p-2 m-2'>
        <h2 className='text-center fw-bold text-decoration-underline'>Welcome Admin <span className='bi bi-person-circle text-danger'></span></h2>
        <img src={Admin} className='w-100 rounded-4' alt='admin'/>
        </div>
    </div>
  )
}

export default Welcome
