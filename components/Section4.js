import React from 'react'
import p8 from "../assets/p8.png";


export default function Section4() {
  return (
<div className="lg:flex justify-between">
      {/* <div className="row"> */}
      <div className="font-bold ">
        <h1 className="text-4xl font-bold pb-4 ml-8">Our Brands</h1>
        <p className="para w-50% ml-8" >
        We have over 20 Brands, in a range of languages and geographies. The high volume of traffic we generate means we provide our partners and clients with almost unparalleled service levels.

SoulFactors and Brokees are just two of our burgeoning pet projects, the former, a holistic women’s lifestyle community, and the latter, an innovative local real estate platform.
        </p>
        <div className="border-b-2 w-fit ml-8 border-[#b350ec] hover:border-red-600">
        <a href="#" className="w-fit ml-6 text-[#b350ec] hover:text-red-600">
          LEARN MORE


        </a>
        </div>
        {/* <a href="#" className="ml-8 text-decoration-line: underline;">
          LEARN MORE
        </a> */}
      </div>

      <img src={p8} alt="" className="w-100" />
    </div>
    )
}
