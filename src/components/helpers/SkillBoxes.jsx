import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ovalSkills from '../../assets/images/ovalSkills.png'

const SkillBoxes = ({boxInnerTitle}) => {
  return (
    <>
    <div className=' relative h-[334px] w-[370px] border-solid border-2 border-light hover:bg-ladyPink hover:text-white duration-300 px-[50px] pt-[50px] pb-[36px]' >
        <div className='top-0 left-0 absolute'>
          <img src={ovalSkills} alt="image" />
        </div>
        <h5 className=' font-Montserrat text-lightBlack text-2xl  '>{boxInnerTitle}</h5>
        <p className='w-[270px] mt-7 mb-10 text-lightBlack  text-base   font-Montserrat font-normal leading-7'>
        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled
        </p>
         <a href="#" className='inline-flex justify-center items-center gap-x-2  font-Montserrat font-bold
                 uppercase transition-all duration-300 text-secondary  hover:text-white'>LEARN MORE<MdOutlineArrowForwardIos/>
        </a>
    </div>
    </>
  )
}

export default SkillBoxes