import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ButtonWithIcon = ({href,buttonText,hoverCSS,textColor,paddingSize}) => {
  return (
    <>
        <a href={href} className={`inline-flex justify-center items-center gap-x-2 py-5 ${paddingSize ? 'px-12' : "px-0"} rounded-[30px] font-Montserrat font-bold
         uppercase transition-all duration-300 ${textColor?'text-white':'text-secondary'} ${hoverCSS?'hover:bg-secondary':'hover:bg-transparent'} hover:text-white`}>{buttonText} <MdOutlineArrowForwardIos/></a>
    </>
  )
}

export default ButtonWithIcon