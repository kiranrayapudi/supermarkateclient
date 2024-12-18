import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import userimage from './Adminimages/userloginimage.jpg';

const User = () => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateInput = () => {
    const Name = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const number = /^[0-9]+$/;
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Name validation
    if (username === "") {
      setNameError("Please Enter Name");
      isValid = false;
    } else if (!username.match(Name)) {
      setNameError("Only Characters allowed");
      isValid = false;
    } else {
      setNameError("");
    }

    // Mobile validation
    if (mobile === "") {
      setMobileError("Please Enter Mobile Number");
      isValid = false;
    } else if (!mobile.match(number)) {
      setMobileError("Only numbers are allowed");
      isValid = false;
    } else if (mobile.length !== 10) {
      setMobileError("Mobile number must be 10 digits");
      isValid = false;
    } else {
      setMobileError("");
    }

    // Email validation
    if (email === "") {
      setEmailError("Please Enter Email Address");
      isValid = false;
    } else if (!email.match(mail)) {
      setEmailError("Please Enter Valid Email");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const logincheck = (e) => {
    e.preventDefault();

    // Validate all fields before navigating
    if (validateInput()) {
      navigate("*");  // Navigate to the desired route
    } else {
      toast.error("Please fill all the fields correctly");
    }
  };

  return (
    <div className="container p-5">
      <ToastContainer />
      <h2 className="fw-bold text-center text-decoration-underline">Welcome to the Super Market</h2>
      <div className="row shadow rounded">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto border-end p-3 p-md-4 p-lg-5 rounded-4 log">
          <form onSubmit={logincheck} className="txt-center p-5">
            <h2 className="text-center fw-bold">User Login</h2>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control form-control mx-auto mb-3"
            />
            <p>{nameError}</p>

            <input
              type="number"
              name="mobile"
              placeholder="Enter mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control mx-auto mb-3"
            />
            <p>{mobileError}</p>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3 mx-auto w-100"
            />
            <p>{emailError}</p>

            <input
              type="submit"
              value="login"
              className="btn btn-danger form-control mb-2 w-50"
            />
          </form>
        </div>
        <div className="col-12 col-sm-10 col-md-4 mx-auto p-2">
          <img src={userimage} className="w-100" alt="userimage" />
        </div>
      </div>
    </div>
  );
};

export default User;

