import React from 'react'
import Cyberpark from "../assets/Cyberpark.png";

export default function Section9() {
  return (
    <div>
          <h1 className='text-4xl font-bold pb-4 ml-8 text-center'>Proud Members Of</h1>
          <div className='lg:flex justify-between pt-6 mr-[60px] ml-[60px] pb-[60px]'>
            <img src={Cyberpark} alt="" className="w-100" />
            <img src={Cyberpark} alt="" className="w-100" />
            <img src={Cyberpark} alt="" className="w-100" />
            <img src={Cyberpark} alt="" className="w-100" />
            

          </div>

    </div>
  )
}
