import React from 'react'
import SubHeading from '../../../helpers/subHeading'
import Title from '../../../helpers/Title'
import SkillBoxes from '../../../helpers/SkillBoxes'


const Skills = () => {
  return (
    <>
    <div className='customContainer '>
        <div className='mt-7'>
        <SubHeading subText={'SKILLS'}/>
        <Title titleText={'What Can I Do'}/>
        </div>
        <div className='flex justify-between mt-20 mb-[150px]'>
            <SkillBoxes boxInnerTitle={'Illustrator'} />
            <SkillBoxes boxInnerTitle={'UI/UX Designer'} />
            <SkillBoxes boxInnerTitle={'Logo Design'} />
        </div>

    </div>
    </>
  )
}

export default Skills