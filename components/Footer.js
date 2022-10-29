import React from "react";
// import {BsInstagram} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className="w-[100%] h-fit bg-black text-white drop-shadow-lg pt-10">
        <div className="lg:flex justify-between item-center w-full ml-[20px]">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl items-center ml-4" > Codeace</h1>
            <div>
             <h1 className="f-head text-3xl font-bold mb-4">Go Social</h1>
              <ul className="mb-3">
                <li class="">Instagram</li>
                <li class="">Facebook</li>
                <li class="">Linkedin</li>
                <li class="">Youtube</li>
              </ul>
            </div> 
            <div>
            <h1 className="f-head text-3xl font-bold mb-4" id="f-links">Useful Links</h1>
            <ul className="mb-3">
              <li className="">contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
            </div>
            <div>
            <h1 className="f-head text-3xl font-bold mb-4">Address</h1>
            <ul className="mb-3">
              <li>(+91)78563412</li>
              <li>admin@codeace.com</li>
              <li>
KSITIL Special Economic Zone,<br/> Unit No. 4B,<br/> Second Floor, Sahya Building, <br/>Govt. Cyberpark, Nellikode PO,<br/> Kozhikode, Kerala, India 673016</li>
            </ul>
            </div>
          </div>
      </div>                    
          

            



  );
}
