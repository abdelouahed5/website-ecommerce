
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { addCart } from '../redux/action';
function Product() {
  const dispatche=useDispatch();
  const addProduct=(product)=>{
dispatche(addCart(product));

  }
    const [product, setProduct] = useState([]);
    const {id}=useParams();
    const [loiding, setLoiding] = useState(false);
    useEffect(()=>{
        setLoiding(true);
        fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
        .then(data=>{
            setProduct(data)
            setLoiding(false);  
        });
        
    },[]);

    const Loiding =()=>{
        return(
            <>
            <div className=' col-md-6 '>
              <Skeleton height={400}/>
            </div>
            <div className=' col-md-6 ' style={{lineHeight:2}} >
              <Skeleton height={50} width={300}/>
              <Skeleton height={75}/>
              <Skeleton height={25}  width={150}/>
              <Skeleton height={50}/>
              <Skeleton height={150}/>
              <Skeleton height={50}  width={100}/>
              <Skeleton height={50}  width={100} style={{marginLeft:6}} />
            </div>
            </>
        )
    };
    const ShowProduct=()=>{
        return (
            <>

  <div className="container py-5">
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-5 height={'400px'} width={'690px'} ">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={product.image}
                    className="w-100" height={'400px'} width={'690px'} />
                  <a href="#!">
                    <div className="hover-overlay">
                      
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 ">
                <h5 className=' text-uppercase text-black-50 '> {product.category} </h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>{product.rating && product.rating.rate}</p>
                </div>
                
               
                <h1 className=" display-6 ">
                 {product.title}
                </h1>
                <h3 className=" display-6 fw-bold my-4 ">
                 $ {product.price}
                </h3>
                <p className='lead'> {product.description} </p>
                <button className='btn btn-outline-dark px-4  py-2 ' onClick={()=>{
                  addProduct(product)}} 
                >Add To Card</button>
                <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go To Card</Link>
                
              </div>
              
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

            </>
        )
    }
    return (
<div>
<div className='container py-4 '>
    <div className='row py-4'>
    {loiding ? <Loiding/> : <ShowProduct/>}
    </div>
</div>

</div>
    )
};
export default Product;
// import React from "react";
// import { useParams, } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Product = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState([]);
//     const [loiding, setLoiding] = useState(false);

//     useEffect(() => {
//         setLoiding(true);
//         fetch(`https://fakestoreapi.com/products/${product.id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setProduct(data);
//                 setLoiding(false);
               
//             });

//     }, [ ]);

//     return (
//         <div>hhh</div>


//     );
// };
// export default Product;
// import React from "react";
  


// const Product=()=>{
//     return (
//  <>
//  <h1>Product</h1></>
//     );
// };
// export default Product;