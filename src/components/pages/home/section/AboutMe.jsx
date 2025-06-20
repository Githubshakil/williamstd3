import React from 'react'
import ButtonWithIcon from '../../../helpers/ButtonWithIcon'
import ovalAboutLg from '../../../../assets/images/ovalAboutLg.png'
import ovalAboutSm from '../../../../assets/images/ovalAboutSm.png'



const AboutMe = () => {
  return (
    <>
        <div className='flex bg-ladyPink max-w-[1440px] max-h-[722px] m-auto mt-9 py-[150px] px-[185px] relative'>
            <div className='absolute top-0 left-1'>
            <img src={ovalAboutLg} alt="image" />
            </div>
            <div className='absolute bottom-0 right-1'>
                 <img src={ovalAboutSm} alt="" />
            </div>

            <div className='max-w-customContainer mx-auto  '>
                <div className='flex justify-between '>
                    <div>
                        <h4 className='font-Montserrat text-[18px] font-bold  text-lg text-[#ffffff] mb-5 leading-normal '>About Me</h4>
                        <h3 className='w-[560px] h-[126px]  text-3xl text-[#ffffff] font-Montserrat font-bold leading-normal'>
                            You can’t  use up creativity.
                            The more you use, the more 
                            you have in your signifant mind.
                        </h3>
                        <p className='max-w-[501px] text-[#ffffff] text-base mt-8 mb-[70px] font-Montserrat font-normal leading-7'>
                        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys  
                        </p>
                        <ButtonWithIcon href={'#'} buttonText={'DOWNLOAD RESUME'} textColor="true"/>
                    </div>
                    <div>
                        <h3 className='max-w-[360px] h-[84px] mt-[89px] text-3xl text-[#ffffff] mb-8 font-Montserrat font-bold leading-normal '>
                            Any type of question & Discussion.
                        </h3>
                        <p className='max-w-[421px] text-[#ffffff] text-base mt-8 mb-8  font-Montserrat font-normal leading-7'>
                            Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat
                        </p>
                        <span className='text-[#ffffff]  font-bold font-Montserrat leading-7'>WilliamAndersons@william.std</span>
                    </div>
                </div>

            </div>
            
        </div>
    </>
  )
}

export default AboutMe