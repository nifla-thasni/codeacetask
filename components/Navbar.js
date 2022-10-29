import React from "react";
// import {BeakerIcon,XCircleIcon } from "@heroicons/react/24/solid";

 export default function Navbar() {
//   const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-white  drop-shadow-lg" >
        <div className="px-2 lg:flex justify-between w-full h-full" >
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl items-center" > Codeace</h1> 
                <ul className="hidden md:flex items-center pr-4">
                    <li cliclassName="mx-2">Contact</li>
                    <li className="mx-2">Careers</li>
                    <li className="mx-2">Life @ Codeace</li>

                </ul>
            
        </div>
    </div>   
             
  );
}
// export default Navbar;
