import React, { useEffect, useState } from "react";
import Slide1 from "./Slider/Slide1.webp";
import Slide2 from "./Slider/Slide2.webp";
import Slide3 from "./Slider/Slide3.webp";

import { NavLink } from "react-router-dom";
import axios from "axios";

const Grocery = () => {
  const [grocerydata, setgrocerydata] = useState([]);

  useEffect(() => {
    document.title = "Grocery's";
  });
  useEffect(() => {
    axios
      .get("https://supermarketserver-mmhe.onrender.com/Products")
      .then((res) => {
        // console.log(res.data);
        const data = res.data.filter((item) => {
          return item.category === "Grocerys";
        });
        console.log(data);
        setgrocerydata(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  });
  return (
    <div>
      <div className="dropdown conatiner ms-5 ">
        <NavLink
          className="btn btn-secondary dropdown-toggle"
          to="*"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="bi bi-house-down">Home</span>
        </NavLink>

        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="*">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/grocery">
              Grocerys
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" href="/eggs">
              Egg Meat&Fish
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" href="/fruits&vegetables">
              Fruits&vegetables
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div
          id="carouselExampleInterval"
          className="carousel slide container  rounded-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Slide1} className="d-block w-100 rounded-4" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Slide2} className="d-block w-100 rounded-4" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Slide3} className="d-block w-100 rounded-4" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="cardbg container p-5  mt-3 border rounded-4">
        <h2 className="fw-bold">My Smart Basket</h2>
        <div className="row">
          {grocerydata.map((gro) => {
            return (
              <div
                className="col-12 col-sm-12 col-mb-6 mb-3 col-lg-4 col-xl-3"
                key={gro._id}
              >
                <div className="card p-2 h-100 ">
                  <NavLink className="nav-link " to={`/details/${gro._id}`}>
                    <div className="card-img ">
                      <img
                        src={gro.image}
                        className="rounded-5 image1 w-100"
                        alt="gro.image"
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-text text-center">{gro.company}</p>
                      <p className="card-title">
                        {gro.product} - ₹{gro.price}
                      </p>
                      {/* <p className="card-text">₹{gro.price}</p> */}
                    </div>

                    <button className="border-success w-100 border-1 rounded-1 text-center ">
                      {gro.kg}
                      <span>-₹{gro.price}-only </span>
                    </button>

                    <span className="fw-bold">
                      {" "}
                      ₹{gro.price}
                      <span className="text-decoration-line-through text-end">
                        (₹{gro.normalprice})
                      </span>{" "}
                      {gro.offer}%Off
                    </span>
                  </NavLink>

                  <div className="card-footer">
                    <button className="btn btn border-success w-100">
                      <NavLink className="nav-link " to={`/addcart/${gro._id}`}>
                        Addcart
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container p-5 Border ">
        <h4 className="text-center fw-bold text-decoration-underline">
          Why choose Super Market <span className="text-danger">?</span>
        </h4>
        <div className="row ">
          <div className="col-3 back rounded-5 p-4 border-end border-5">
            <h2 className="bi bi-bag-plus-fill text-center rounded-"> </h2>
            <p className="text-center fw-bold">Quality</p>
            <p className="text-center">You Can Trust</p>
          </div>
          <div className="col-3 back rounded-5 p-4 border-end border-5">
            <h2 className="bi bi-clock-fill text-center"> </h2>
            <p className="text-center fw-bold ">On Time </p>
            <p className="text-center">Guarantee</p>
          </div>
          <div className="col-3 back rounded-5 p-5 border-end border-5">
            <h2 className="bi bi-truck text-center"> </h2>
            <p className="text-center fw-bold">Free Delivery</p>
          </div>
          <div className="col-3 back rounded-5 p-4 border-end border-5">
            <h2 className="bi bi-check2-circle text-center"> </h2>
            <p className="text-center fw-bold">Return Policy</p>
            <p className="text-center">No Question asked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
