import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {
    const [products,setproducts] = useContext(ProductContext);
    const navigate = useNavigate();  
    const id = useParams();
   const[product,setProduct] = useState({
     title:'',
     image:'',
     category:'',
     price:'',
     description:''

   });
//   console.log(typeof id);
  const values = Object.values(id);
  console.log(values[0]); 
   console.log(JSON.stringify(id));
 
 const changehandler= (e)=>{
    setProduct({...product,[e.target.name]:e.target.value})

 }
 console.log(products.filter((p) => p.id == JSON.stringify(id))[0]);

   useEffect(() => {
        setProduct(products.filter((p)=> p.id == values[0] )[0]);
       
   }, [id]);
 
console.log(typeof id, typeof products[0]?.id);

    

//  console.log(product);


  const AddProductHandler = (e) => {
   e.preventDefault();
   
   if(
      product.title.trim().length <5 ||
      product.image.trim().length <5 ||
      product.category.trim().length <5 || 
      product.price.trim().length <5 ||
      product.description.trim().length <5  
    )
    {
       alert("Please fill all fields with minimum 5 characters");
       return;
   } 

//  console.log(product);
    const pi = products.findIndex((p) => p.id == values[0]);

    const copyData= [...products];
    copyData[pi] = {...products[pi], ...product };

   
    setproducts(copyData);
    localStorage.setItem("product", JSON.stringify(copyData));
    toast.success("Product Updated Successfully");
    navigate(-1);
//    console.log(product);


  };
  return (
    <form onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
    <h1 className="mb-5 w-1/2 text-2xl ">Edit Product</h1>
    <input
      type="url"
      placeholder="image url"
      className="text-1xl bg-zinc-100 rounded p-2 w-1/2 mb-3"
      name="image"
      onChange={changehandler}
      value={product && product.image}
    />
    <input
      type="text"
      placeholder="title"
      className="text-1xl bg-zinc-100 rounded p-2 w-1/2 mb-3"
      name="title"
      onChange={changehandler}
      value={product && product.title}
    />
    <div className="w-1/2 flex justify-between">
      <input
        type="text"
        placeholder="category"
        className="text-1xl bg-zinc-100 rounded p-2 w-[48%] mb-3"
        name="category"
        onChange={changehandler}
        value={product && product.category}
      />
      <input
        type="number"
        placeholder="price"
        className="text-1xl bg-zinc-100 rounded p-2 w-[48%] mb-3"
        name="price"
      onChange={changehandler}
        value={product && product.price}
      />
    </div>
    <textarea
      name="description"
      onChange={changehandler}
      value={product && product.description}
      placeholder="Description....!"
      className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      rows="7"
    ></textarea>
    <div className="w-1/2">
      <button className="py-2 px-3 border rounded border-blue-200 text-blue-300">
        Update Product
      </button>
    </div>
  </form>
  )
}

export default Edit