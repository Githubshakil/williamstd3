import React from 'react'
import SubHeading from '../../../helpers/subHeading'
import Title from '../../../helpers/Title'
import BlankBoxes from '../../../helpers/BlankBoxes'
import PortfolioBar from '../../../layouts/PortfolioBar'


const Portfolio = () => {
  return (
    <>
    <div className="customContainer">
        <div className='display flex flex-col justify-center items-center mt-[100px] mb-[100px]'>
            <SubHeading subText={'PORTFOLIO'}/>
            <Title titleText={'My Work Recently'}/>
            <div className='flex justify-center mt-10'>
            <PortfolioBar/>
            </div>
            <div className='grid grid-cols-3 gap-8 mt-[50px] mb-[50px]'>
                <BlankBoxes />
                <BlankBoxes />
                <BlankBoxes />
                <BlankBoxes />
                <BlankBoxes />
                <BlankBoxes />
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio