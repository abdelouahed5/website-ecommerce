import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loiding, setLoiding] = useState(false);
    useEffect(()=>{
        setLoiding(true);
        fetch("https://fakestoreapi.com/products").then(res=>res.json())
        .then(data=>{
            setData(data)
            setLoiding(false);
            setFilter(data);
        });
        
    },[]);
    // const handleFetch = () => {
    //     setIsLoading(true);
    //     fetch("https://reqres.in/api/users?page=0")
    //       .then((respose) => respose.json())
    //       .then((respose) => {
    //         setUsers(respose.data)
    //      });
    //  };
    // const [data, setData] = useState([]);
    // const [filter, setFilter] = useState(data);
    // const [loiding, setLoiding] = useState(false);
    // let componentMounted = true;
    // useEffect(() => {
    //     const getProduct = async = () => {
    //         setLoiding(true);
    //         const reponse = await fetch("https://fakestoreapi.com/products");
    //         if (componentMounted) {
    //             setData(await reponse.clone().json());
    //             setFilter(await reponse.json());
    //             console.log(filter);

    //         }
    //         return () => {
    //             componentMounted = false
    //         }



    //     }
    //     getProduct();

    // }, [])
    const Loiding = () => {
        return (
            <>
            
            <div className='col-md-3 ' >
            <Skeleton height={350} />
            </div>
            <div className='col-md-3 ' >
            <Skeleton height={350} />
            </div>
            <div className='col-md-3 ' >
            <Skeleton height={350} />
            </div>
            <div className='col-md-3 ' >
            <Skeleton height={350} />
            </div> 
            </>
        )
    };
    const filterProduct =(cat)=>{
        const updatedList= data.filter((e)=>e.category===cat);
        setFilter(updatedList);
        
    }
    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)} >All</button>
                    
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")} >Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronic</button>
                   
                </div>
               
                {filter.map((product) => {
                        return (
                           <div className="col-md-3 mb-4">
                             <div class="card h-100 text-center p-4" key={product.id}>
                                <img class="card-img-top" src={product.image}
                                 alt={product.title} height={"250px"}/>
                                <div class="card-body">
                                    <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                    <p class="card-text lead fw-bold">${product.price}</p>
                                    <Link to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                                </div>
                            </div>
                           </div>
                        )
                    })}
               
            </>
        )
    }





    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr/>
                    
                </div>
            </div>
            <div className='row justify-content-center'>
                {loiding ?<Loiding/> : <ShowProducts/> }

            </div>
        </div>

    );

}
export default Products;