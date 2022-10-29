import React from 'react'
import p2 from "../assets/p2.png";

export default function Section5() {
  return (
    <div className="lg:flex justify-between pt-20">
      {/* <img src={p3} alt="" className="w-100 mr-8" /> */}

      <div>
        <h1 className="text-4xl font-bold pb-4 mr-8 ml-8"> We’re thinkers, developers, designers & content creators.</h1>
        <p className='mr-8 ml-8 w-50'>
        At CodeAce, we have big ideas, a growth mindset, and ambitious goals, and we’re looking for talented people who share our passion and want to be a part of it.

But most importantly, we are a team of doers. For many years we have been supporting premium brands, large businesses, and startups on innovation, through thoughtful design, reflection on user experience, and optimization of marketing and advertising strategies. Today, thanks to the experience and expertise we have acquired, our ambition is to reach even higher and become the leader in performance marketing!
        </p>

      </div>
      <img src={p2} alt=""  className="w-100 mr-8 h-full" />

    </div>

  )
}
