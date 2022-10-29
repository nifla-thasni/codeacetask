import React from "react";
import download from "../assets/download.png";
export default function Section() {
  return (
    <div className="lg:flex justify-between pt-5">
      {/* <div className="row"> */}
      <div className="font-bold ml-4">
        <h1 className="h1">Growth-driven.</h1>
        <h1 className="h2">Consumer-inspired.</h1>
        <h1 className="h3">Partner-focused.</h1>
        <p className="para w-50% ml-4">
          As leaders in performance marketing, we are adept at innovating and
          adapting to the <br></br> ever-changing digital landscape and using
          complex data science, machine learning, <br></br> and diversified
          marketing strategies to grow brands and businesses.
        </p>
      </div>

      <img src={download} alt="" className="w-50 mr-10-" />
    </div>
  );
}
