import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


const SkillBoxes = ({boxInnerTitle}) => {
  return (
    <>
    <div className="group relative h-[370px] w-[370px] border-2 border-light hover:bg-ladyPink duration-300 pl-[12.5%] pr-[12.5%] pt-[50px] pb-[36px] overflow-hidden">
      <div className="w-[325px] h-[325px] bg-gradient-to-r from-[#F46C88] to-[rgba(251,165,189,0.2)] rounded-full absolute -left-[73px] -top-12 z-[1] opacity-0 group-hover:opacity-100 duration-300"></div>
      <div className="relative z-10">
        <h5 className="font-Montserrat text-lightBlack text-2xl group-hover:text-white duration-300">
          {boxInnerTitle}
        </h5>
        <p className="flex w-[270px] mt-7 mb-10 text-lightBlack text-base font-Montserrat font-normal leading-7 group-hover:text-white duration-300">
          Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, being the savage's bowsman, that is, the person who pulled
        </p>
        <a
          href="#"
          className="flex items-center gap-2 text-ladyPink group-hover:text-white font-Montserrat font-semibold text-lg duration-300"
        >
          Learn More
          <MdOutlineArrowForwardIos />
        </a>
      </div>
    </div>
    </>
  )
}

export default SkillBoxes