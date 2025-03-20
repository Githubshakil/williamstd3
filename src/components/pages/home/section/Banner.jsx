import React from 'react'
import pink_oval from '../../../../assets/images/pink_oval.png'
import Button from '../../../helpers/Button'
import ButtonWithIcon from '../../../helpers/ButtonWithIcon'


const Banner = () => {
  return (
    <>
        <div className='customContainer'>
            <div className='flex justify-between items-center mt-20' >
                <div>
                    <h4 className='font-Montserrat text-lg font-bold text-lightBlack mb-5'>Hello i’m <span className='text-ladyPink'>Visual Designer</span></h4>
                    <h1 className='max-w-[471px] font-Montserrat font-bold text-7xl text-lightBlack leading-[88px]'>William Andersons</h1>
                        <p className='max-w-[460px] text-paraColor font-Montserrat text-base leading-6 mt-8 mb-[50px]'>
                             My ultimate motto is to fulfill the demand of the buyers by making them satisfied with proper file delivery in time and without delay.  
                        </p>

                        <div className='flex gap-3'>
                        <Button href={'#'} buttonText={'Hire Me'}/>
                        <ButtonWithIcon href={'#'} buttonText={'DOWNLOAD RESUME'} hoverCSS="true" paddingSize="true"/>
                        </div>
                </div>
                <div>
                    <img src={pink_oval} alt="image" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner