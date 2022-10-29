import React from 'react'

export default function Section8 () {
  return (
    <div className='pt-[50px] lg:flex justify-between pb-10 ml-[50px] mr-10'>
        <div className='card1 px-2 py-4 shadow-lg w-[100%] pb-6 mb-[20px]'>
          <div className="font-bold text-xl mb-2 ml-4">Comprehensive Benefits </div>
          <div clssName="text-black text-base">
            <p className=" pt-5 max-w-sm rounded overflow-hidden ml-4 ">
            At CodeAce, employees are offered an industry-leading suite of benefits that support physical, financial, and emotional wellbeing. We are committed to fostering continued personal and professional development at every stage of an employee's career            </p>
          </div>

        </div>
         
        <div className='card2 px-2  py-4 shadow-lg w-[100%]'>
          <div className="font-bold text-xl mb-2 ml-4">Inclusive Work Culture </div>
          <div clssName="text-black text-base">
            <p className=" pt-5 max-w-sm rounded overflow-hidden ml-4">
            CodeAce's commitment to inclusion is grounded in the shared belief that innovation comes from ensuring a diversity of voices are heard. And we are committed to fostering ongoing personal and professional development at every stage of an employee's career.            </p>
          </div>

        </div>
    </div>
  );
}
