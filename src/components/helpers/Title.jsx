import React from 'react'

const Title = ({titleText,textLeft}) => {
  return (
    <>
      <h3 className={`font-Montserrat text-lightBlack ${ textLeft ? 'text-left' : 'text-center'} text-3xl font-bold leading-7 tracking-[0.3px] mt-5`}>{titleText}</h3>
    </>
  )
}

export default Title