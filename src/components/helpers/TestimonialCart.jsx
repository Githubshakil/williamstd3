import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCart = ({para,title,designation}) => {
  return (
    <>
        <div className='w-[280px]  ml-3 '>
          <div className='relative'>
            <div className='w-[184px] h-[184px] p-2 bg-[#CECECE]'></div>
            <FaQuoteLeft className='absulate translate-x-[10px] bottom-0  -translate-y-1/2 text-[#F05D7B] text-[30px]'  />
          </div>
          <p className='w-[280px] h-[130px] leading-6 text-paraColor font-Montserrat font-normal text-base mt-6'>{para}</p>
          <h3 className='font-bold font-Montserrat text-[18px] text-lightBlack leading-7 mt-14'>{title}</h3>
          <h5 className='leading-6 text-paraColor font-Montserrat font-normal text-[14px] mt-0'>{designation}</h5>
        </div>
    </>
  )
}

export default TestimonialCart