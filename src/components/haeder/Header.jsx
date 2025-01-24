import React from "react";
import coffee from "../../../public/images/coffee/coffee.png";

export default function Header() {
  return (
    <div>
      <div className="bg-amber-950 flex basis-2 ">
        {/* سمت چپ */}
        <div className="py-20 ml-4 md:ml-10 basis-1/2">
          <h1 className="uppercase text-white text-3xl md:text-6xl font-oswald ">
            we serve <br /> the richest <br />
            <span className="text-yellow-700 text-2xl md:text-5xl font-bold font-playwrite pr-2">
              coffee
            </span>
            in the <br /> city
          </h1>
          <button className="bg-gradient-to-l mt-2 text-white py-1 md:py-3 md:px-2  from-amber-950 to-amber-800 bg-orange-800/60 rounded-2xl hover:bg-gradient-to-l hover:from-amber-700 hover:to-amber-800 hover:scale-105 duration-700 w-[150px] border-none  shadow">
            Coffee and Code
          </button>
        </div>
        {/* سمت راست */}
        <div className="basis-1/2 mr-4  overflow-hidden flex justify-center items-center md:min-h-[50px]">
          <img className="w-[270px] md:w-[500px] spin" src={coffee} alt="" />
          <div className="bg-gradient-to-l text-white py-1 md:py-3 px-3  from-amber-950 to-amber-800 bg-orange-800/60 rounded-2xl hover:bg-gradient-to-l hover:from-amber-700 hover:to-amber-800 hover:scale-110 duration-700 w-auto border-none shadow absolute top-[20%] right-[30%] sm:top-[18%] md:top-[27%] xl:top-[25%] cursor-pointer ">
            <h1>Hey Coder</h1>
          </div>
          <div className="bg-gradient-to-l text-white py-1 md:py-3 px-3  from-amber-950 to-amber-800 bg-orange-800/60 rounded-2xl hover:bg-gradient-to-l hover:from-amber-700 hover:to-amber-800 hover:scale-110 duration-700 w-auto border-none shadow absolute top-[54%] right-[8%] sm:top-[54%] md:top-[87%] xl:top-[90%] xl:right-[14%] cursor-pointer ">
            <h1>Best coffee</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
