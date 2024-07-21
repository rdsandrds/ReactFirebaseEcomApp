import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();  
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setprice] = React.useState("");
  const [description, setdescription] = React.useState(""); 
  const [products,setproducts] = useContext(ProductContext);


  const AddProductHandler = (e) => {
   e.preventDefault();
   
   if(
      title.trim().length <5 ||
      image.trim().length <5 ||
      category.trim().length <5 || 
      price.trim().length <5 ||
      description.trim().length <5  
    )
    {
       alert("Please fill all fields with minimum 5 characters");
       return;
   } 


   const product ={
    id:nanoid(),
     title,
     image,
     category,
     price,
     description,
   };
   setproducts([...products, product]);
   localStorage.setItem("product", JSON.stringify([...products, product]));
   navigate("/");
//    console.log(product);


  };

  return (
    <form onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className="mb-5 w-1/2 text-2xl ">Add New Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-1xl bg-zinc-100 rounded p-2 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-2 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-2 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-2 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        placeholder="Description....!"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="7"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-3 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
