import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ButtonWithIcon = ({href,buttonText}) => {
  return (
    <>
        <a href={href} className='inline-flex justify-center items-center gap-x-2 py-5 px-12 rounded-[30px] font-manufont font-bold
         uppercase transition-all duration-300 text-secondary hover:bg-secondary hover:text-white'>{buttonText} <MdOutlineArrowForwardIos/></a>
    </>
  )
}

export default ButtonWithIcon