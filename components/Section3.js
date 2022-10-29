import React from "react";
import pic2 from "../assets/pic2.png";

export default function Section3() {
  return (
    <div className="mb-32">
      <h1 className="text-4xl font-bold pb-4 text-center">What We Do</h1>
      <div className="lg:flex justify-between h-full ">
        <div className="px-6 py-4 shadow-lg">
          <img src={pic2} alt=""></img>

          <div className="font-bold text-xl mb-2">Content Network</div>
          {/* <img src={pic2}alt=''></img> */}
          <div clssName="text-black text-base">
            <p className=" pt-5 max-w-sm rounded overflow-hidden ">
              A portfolio of more than 20 brands, around 300 blogs, and quite a
              few budding social media and YouTube channels.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 shadow-lg">
          <img src={pic2} alt=""></img>

          <div className="font-bold text-xl mb-2">MarTech Development </div>
          {/* <img src={pic2}alt=''></img> */}
          <div clssName="text-black text-base">
            <p className="pt-5 max-w-sm rounded overflow-hidden ">
              Designing and developing software, tools, and technologies for
              running data analysis, managing campaigns, and assisting marketing
              efforts{" "}
            </p>
          </div>
        </div>

        <div className="px-6 py-4 shadow-lg">
          <img src={pic2} alt=""></img>

          <div className="font-bold text-xl mb-2">Internet Marketing</div>
          {/* <img src={pic2}alt=''></img> */}
          <div clssName="text-black text-base">
            <p className="pt-5 max-w-sm rounded overflow-hidden ">
              Search Engine Optimization, Google and Facebook ads, Email
              Marketing, YouTube Marketing, Native, Push, and all kinds of media
              buying.
            </p>
          </div>
        </div>
        <div className="px-6 py-4 shadow-lg">
          <img src={pic2} alt=""></img>

          <div className="font-bold text-xl mb-2">Marketing Consulting </div>
          {/* <img src={pic2}alt=''></img> */}
          <div clssName="text-black text-base">
            <p className="pt-5 max-w-sm rounded overflow-hidden">
              100% data-driven digital marketing consulting to assess your
              brand's performance, analyze the gaps and find 360° solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
