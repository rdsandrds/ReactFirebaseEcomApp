import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loader from "./Loader";

const Details = () => {
    const navigate = useNavigate();
    const [products,setproducts] = useContext(ProductContext); 
  const [product, setproduct] = useState(null);
  const { id } = useParams();
//   const getsingleproduct = async () => {
//     try {
//       const { data } = await axios.get(`/products/${id}`);
//       // console.log(data);
//       setproduct(data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

  useEffect(() => {
    // getsingleproduct();
    if(!product){
        setproduct(products.filter(p=>p.id == id)[0])
    }
  }, []);

  const ProductDeleteHandler=(id)=>{
    const filteredproducts = products.filter((p)=>p.id !== id);
    setproducts(filteredproducts);
    localStorage.setItem('product', JSON.stringify(filteredproducts));
    navigate("/");
    
  }

  return product ? (
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]  ">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 nb-3"> ${product.price}</h2>
        <p className="mb-[5%]">
          {product.description}
        </p>
        <Link className="mr-5 py-2 px-3 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <button onClick={()=> ProductDeleteHandler(product.id)} className="py-2 px-3 border rounded border-red-200 text-red-300">
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Details;
