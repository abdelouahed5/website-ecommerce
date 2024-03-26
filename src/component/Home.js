import React from "react";
import Product from "./Products";
import Products from "./Products";
const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="image/.jpg" className="card-img  " alt="..." style={{ backgroundColor: "black", height: '550px' }} />
                <div className="card-img-overlay  f-column d-flex justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fx-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    
                    </div>
                </div>
            </div>
            <Products/>

        </div>
    )
};
export default Home;