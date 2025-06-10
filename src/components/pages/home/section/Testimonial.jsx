import React from 'react'
import SubHeading from '../../../helpers/subHeading'
import Title from '../../../helpers/Title'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import TestimonialCart from '../../../helpers/TestimonialCart';
import { testimonialData } from '../../../../dummyData/testimonialData';

const Testimonial = () => {
  return (
    <>
    
    <div className="max-w-customContainer mx-auto flex justify-between text-clip  ">
        <div className='w-[30%]  flex flex-col  items-start ml-[50px]'>
        <SubHeading subText={'TESTIMONIALS'}/>
        <Title titleText= {'What they say about me'} textLeft="ture"/>
        <p className='font-Montserrat text-[16px] text-paraColor mt-6 mb-25 w-[311px] h-[78px] leading-[24px]'>
        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second on.
        </p>
        <div className='flex gap-x-5 mt-20'>
            <button className='w-[70px] h-[70px] text-[30px] text-bold hover:bg-secondary flex items-center justify-center duration-300' ><GoChevronLeft /></button>
            <button className='w-[70px] h-[70px] text-[30px] text-bold hover:bg-secondary flex items-center justify-center duration-300' ><GoChevronRight /></button>
            
            
        </div>
        </div>


        <div >
               
              <div>
                <div className='flex gap-x-10  ml-[150px]  '>
                    {
                        testimonialData.map((item) => (
                            <TestimonialCart key={item.id} para={item.para} title={item.title} designation={item.designation}/>
                        ))
                    }
                </div>
              </div>
        </div>

    </div>
    
    </>
  )
}

export default Testimonial