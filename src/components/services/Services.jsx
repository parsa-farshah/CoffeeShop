import React from "react";
import coffee from "../../../public/images/coffee/coffee.png";

const servicesData = [
  {
    id: 1,
    img: coffee,
    nameCoffe: "Espresso",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque",
  },
  {
    id: 2,
    img: coffee,
    nameCoffe: "Hot Chocolate",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque",
  },
  {
    id: 3,
    img: coffee,
    nameCoffe: "Cappuccino",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="bg-white w-full flex flex-col items-center py-10"
    >
      <h1 className="font-playwrite text-gray-800 text-xl md:text-4xl font-bold">
        Best Coffee For You{" "}
      </h1>
      <div className="flex w-[80%] justify-between pt-20">
        {/* نمایش کارت‌های خدمات */}
        {servicesData.map((data) => (
          <div
            key={data.id}
            className="bg-slate-100/40 hover:bg-amber-950 hover:text-white/80 duration-500  rounded-xl shadow-2xl max-w-[31%] flex flex-col items-center "
          >
            <img
              className="w-[200px] hover:rotate-3   relative top-[-60px] hover:scale-105 md:hover:scale-125 duration-500"
              src={data.img}
              alt={data.nameCoffe}
            />
            <h1 className="text-sm md:text-2xl text-start font-extrabold">{data.nameCoffe}</h1>
            <p className="text-xs md:text-lg  text-gray-400 pt-5 p-5 text-center font-medium">
              {data.about}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
