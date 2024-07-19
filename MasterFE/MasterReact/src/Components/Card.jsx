import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1522780550166-284a0288c8df?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sequi architecto ipsum",
      instock: true,
    },
    {
      image:
        "https://media.istockphoto.com/id/1214982859/photo/many-colorful-toothbrushes-on-pink-background-top-view.jpg?s=1024x1024&w=is&k=20&c=qY0KfzwMc9zmwcN3Vdi7W2RPGOSQC5Gg2t3z_cLU6Dc=",
      name: "Daily Object",
      desc: "lorem ipsum dolor, sit amet consectetur adip",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Occasional Grosserices",
      desc: "lorem ipsum dolor,",
      instock: true,
    },
  ];
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200 ">
        {data.map((elem, index) => (
          <div className=" w-52 bg-zinc-100  rounded-md overflow-hidden">
            <div className="w-full h-32 bg-zinc-300">
              <img
                className="w-full h-full object-cover position-top"
                src={elem.image}
                alt=""
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-bold">{elem.name}</h2>
              <p className="text-xs mt-5">{elem.desc}</p>
              <button onClick={() =>alert("heyyy bhava")}
                className={`w-full rounded-md ${
                  elem.instock ? "bg-blue-500" : "bg-red-500"
                } text-white font-bold py-2 mt-5`}
              >
                {elem.instock ? "In Stock" : "Out Of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
