import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ViewProducts = () => {
  const [productdata, setproductsdata] = useState([]);
  const [id, setId] = useState("");
  const [company, setcompany] = useState("");
  const [product, setproduct] = useState("");
  const [image, setimage] = useState("");
  const [normalprice, setnormalprice] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [offer, setoffer] = useState("");
  const [kg, setkg] = useState("");
  const [category, setcategory] = useState("");
  
  useEffect(() => {
    axios
      .get("https://supermarketserver-mmhe.onrender.com/Products")
      .then((res) => setproductsdata(res.data))
      .catch((err) => console.log(err));
  });
  const deleteproduct = (id) => {
    axios
      .delete(`https://supermarketserver-mmhe.onrender.com/Products/${id}`)
      .then(() => toast("One product is deleted"))
      .catch((err) => console.log(err));
  };
  const editproduct = (id) => {
    axios.get(`https://supermarketserver-mmhe.onrender.com/Products/${id}`).then((res) => {
      setId(res.data._id);
      setcompany(res.data.company);
      setcategory(res.data.category);
      setproduct(res.data.product);
      setimage(res.data.image);
      setdescription(res.data.description);
      setnormalprice(res.data.normalprice);
      setprice(res.data.price);
      setoffer(res.data.offer);
      setkg(res.data.kg);
    });
  };
  const updatedata = {
    company,
    product,
    image,
    normalprice,
    price,
    description,
    offer,
    kg,
    category,
  };
  const update = (e) => {
    e.preventDefault();
    axios.put(`https://supermarketserver-mmhe.onrender.com/Products/${id}`, updatedata).then(() => {
      toast.success("Data Updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };
  return (
    <div>
      <ToastContainer />
      <div className="row">
        {productdata.map((pro) => {
          return (
            <div
              key={pro._id}
              className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3"
            >
              <div className="card">
                <img src={pro.image} className="image1 rounded-4 m-4" alt="" />
                <div className="card-body">
                  <p className="card-text text-decoration-underline">
                    {pro.company}
                  </p>
                  <h5 className="card-title">{pro.product}</h5>
                  <span>{pro.category}</span>
                  <p className="card-text">₹{pro.price}</p>
                </div>

                <button className="border-success w-100 border-1 rounded-1 text-center ">
                  {pro.kg}<span>-₹{pro.price}-only </span>
                </button>

                <span className="fw-bold">
                  {" "}
                  ₹{pro.price}
                  <span className="text-decoration-line-through text-end">
                    (₹{pro.normalprice})
                  </span>{" "}
                  {pro.offer}%Off
                </span>

                <div>
                  <button className="btn btn border-success w-100">
                    <NavLink className="nav-link" to={`/addcart/${pro.id}`}>
                      Add to Cart
                    </NavLink>
                  </button>
                </div>
                <div className="card-footer">
                  <button
                    onClick={() => deleteproduct(pro._id)}
                    className="btn btn-danger bi bi-trash3 me-2"
                  ></button>
                  <button
                    onClick={() => editproduct(pro._id)}
                    data-bs-target="#editproduct"
                    data-bs-toggle="modal"
                    className="btn btn-primary bi bi-pencil  "
                  ></button>
                </div>      
              </div>
            </div>
          );
        })}
      </div>

      <div className="modal" id="editproduct">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-start">Edit Product Details</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={update}>
              <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setcompany(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="text"
                  name="product"
                  placeholder="product Name"
                  value={product}
                  onChange={(e) => setproduct(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="url"
                  name="image"
                  placeholder="Image"
                  value={image}
                  onChange={(e) => setimage(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="number"
                  name="normalprice"
                  placeholder="Normal price"
                  value={normalprice}
                  onChange={(e) => setnormalprice(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="number"
                  name="offer"
                  placeholder="offer"
                  value={offer}
                  onChange={(e) => setoffer(e.target.value)}
                  className="form-control mb-3 rounded-1"
                />
                <input
                  type="text"
                  id="kg"
                  value={kg}
                  onChange={(e) => setkg(e.target.value)}
                  placeholder="Enter value in kg"
                  className="form-control mb-3 rounded-1"
                />
                <input  
                  type="submit"
                  value="Add Product"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProducts;
