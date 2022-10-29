import React from 'react'
import Video from "../assets/Video.mp4";

export default function Section7() {
  return (
    <div className='pt-4 lg:flex justify-between'>
        <video className='w-[500px] ml-10 pb-4 mr-4 pr-6' controls>
            <source src={Video}></source>
        </video>
        <div className='pt-4 ml-4'>
          <h1 className='text-4xl font-bold pb-4 ml-8'>Come Join Our Crew!!</h1>
          <p className='mr-8 ml-8 w-50'>At CodeAce, we have big ideas, a growth mindset, and ambitious goals, and we’re <br></br>looking for talented people who share our passion and want to be a part of it.
          </p>
        </div>
    </div>
  )
}
