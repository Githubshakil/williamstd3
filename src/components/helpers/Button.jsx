import React from 'react'


const Button = ({href,buttonText}) => {
  return (
    <>
        <a href={href} className='py-5 px-12 rounded-[30px] font-Montserrat font-bold
         uppercase transition-all duration-300 text-secondary hover:bg-secondary hover:text-white'>{buttonText}</a>


    </>

  )
}

export default Button