import React from "react";
import logo from "../../../public/images/logo/logoCoffee.png";
import { CiCoffeeCup } from "react-icons/ci";

const Menus = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "Services",
    href: "#services",
  },
  {
    id: 3,
    title: "About",
    href: "#about",
  },
];

export default function Navbar() {
  return (
    <div className="bg-gradient-to-t from-amber-950 to-amber-900">
      <div className="px-2 md:py-3 md:px-8">
        <div className="flex justify-between">
          {/* قسمت لوگو */}
          <div>
            <a
              className="text-white text-xs md:text-xl font-playwrite font-extrabold flex items-center"
              href="#"
            >
              <img
                className="w-[70px] h-[70px]  md:w-[110px] md:h-[110px]"
                src={logo}
                alt=""
              />
              Coffee Shop
            </a>
          </div>
          {/* قسمت لینک‌ها */}
          <div className="flex justify-center items-center gap-7">
            <ul className="text-white flex justify-center gap-5">
              {Menus.map((data) => (
                <li key={data.id}>
                  <a
                    className="text-white/80 text-sm md:text-xl font-medium font-oswald"
                    href={data.href} // لینک به id مقصد
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="text-white w-[80px] md:w-[150px] text-sm font-oswald md:text-3xl md:font-medium bg-yellow-950 p-1 md:p-4 rounded-xl md:rounded-3xl flex justify-between items-center hover:scale-105 duration-500">
              Order
              <CiCoffeeCup size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
