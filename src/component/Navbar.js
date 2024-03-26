import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

 const Navbar=()=>{
  const state=useSelector((state)=>state.HandelCart);
  console.log(state);
    return(
       
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm ">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold fs-4 " to="/">LA COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="buttons">
       <Link className="btn btn-outline-dark " to="/login" > <i className="fa fa-sign-in" ></i> Login</Link>
       <Link className="btn btn-outline-dark ms-2" to="/register" > <i className="fa fa-user-plus" ></i> Register</Link>
       <Link className="btn btn-outline-dark ms-2"   to="/card"> <i className="fa fa-shopping-cart " ></i> Card({state.lenght})</Link>
      </div>
     
    </div>
  </div>
</nav>
      </div>
        );
    
 }
 export default Navbar;