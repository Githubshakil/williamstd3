import React from 'react'
import SubHeading from '../../../helpers/subHeading'
import Title from '../../../helpers/Title'
import SliderBox from '../../../helpers/SliderBox'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Testimonial = () => {
  return (
    <>
    
    <div className="customContainer flex justify-between ">
        <div className='w-[30%]  flex flex-col justify-center items-start ml-[50px]'>
        <SubHeading subText={'TESTIMONIALS'}/>
        <Title titleText= {'My Work What they say about me'}/>
        <p className='text-[16px] text-paraColor mt-6 mb-25 max-w-[311px] max-h-[78px] leading-[24px]'>
        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second on.
        </p>
        <div className='flex gap-x-5 mt-10'>
            <button className='w-[70px] h-[70px] text-[30px] text-bold hover:bg-secondary flex items-center justify-center duration-300' ><GoChevronLeft /></button>
            <button className='w-[70px] h-[70px] text-[30px] text-bold hover:bg-secondary flex items-center justify-center duration-300' ><GoChevronRight /></button>
            
            
        </div>
        </div>


        <div className='w-[70%]'>
              <SliderBox/>  
        </div>

    </div>
    
    </>
  )
}

export default Testimonial