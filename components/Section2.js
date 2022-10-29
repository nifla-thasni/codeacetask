import React from "react";
import Capture1 from "../assets/Capture1.PNG";

export default function Section2() {
  return (
    <div className="lg:flex justify-between pt-20">
      <img src={Capture1} alt="" className="w-100" />

      <div>
        <h1 className="text-4xl font-bold pb-4 ml-15 mr-4">Who We Are</h1>
        <p className="ml-15 mr-4">
          We are a team of creative and skilled marketing 'ninjas' with
          experience in search engine optimization,<br></br> social media marketing, and
          media buying, and we are keen on High-Intent Lead Generation through<br></br>
          our diversified advertising strategies! Our brands include thriving
          online communities of all kinds - <br></br>including health and wellness,
          lifestyle, tech, education, personal finance, entertainment, and
          trivia.
        </p>
        <br></br>
        <div className="border-b-2 w-fit border-[#b350ec] hover:border-red-600">
        <a href="#" className="w-fit ml-15 mr-4  text-[#b350ec] hover:text-red-600">
          LEARN MORE


        </a>
        </div>
      </div>
    </div>
  );
}
