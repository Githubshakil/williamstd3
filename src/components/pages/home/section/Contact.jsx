import React from 'react'
import ovalAboutLg from '../../../../assets/images/ovalAboutLg.png'
import ovalAboutSm from '../../../../assets/images/ovalAboutSm.png'

const Contact = () => {
  return (
    <>
    <div className='bg-ladyPink max-w-[1440px] max-h-[722px] m-auto mt-9 py-[150px] px-[185px] relative'>
        <div className='absolute top-0 left-1'>
            <img src={ovalAboutLg} alt="image" />
        </div>
        <div className='absolute bottom-0 right-1'>
            <img src={ovalAboutSm} alt="" />
        </div>
        <div className='customContainer'>
        <h4 className='font-Montserrat text-[18px] font-normal  text-lg text-[#ffffff] mb-5 leading-normal text-center '>Contact Us</h4>
        <h3 className='w-[421px] h-[84px]  text-4xl text-[#ffffff] font-Montserrat font-bold leading-tight text-center m-auto'>
        Let’s talk, and make something great
        </h3>
          <div className='flex justify-center mt-8 mb-[50px]'>
          <a href="#" className='py-5 px-12 rounded-[30px] font-Montserrat font-bold
          transition-all duration-300 text-white hover:bg-secondary '>Contact Us</a>

          </div>
        </div>
        

        <div className='border-b-2 border-[#ffffff] w-[1440px] -ml-[185px] mb-12  '></div>
        <div className='customContainer  '>
            <div>
                <h6 className='font-Montserrat font-bold text-white text-[19px]'>William.std</h6>
            </div>
            <div className='font-Montserrat font-normal text-[#ffffff] text-base mt-[105px] text-center'>
                Copyright © 2020 william.std | all right reserved
            </div>
            </div>
            
        </div>


    
    
    </>
  )
}

export default Contact