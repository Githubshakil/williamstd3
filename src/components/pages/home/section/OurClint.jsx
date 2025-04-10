import React from 'react'
import OurClintData from '../../../helpers/OurClintData'
import { ourClintData } from '../../../../dummyData/ourClintData'

const OurClint = () => {
  return (
    <>
    <div className='mt-[100px] mb-[100px]'>
        <div className='customContainer flex gap-8 items-center justify-center'>
            {
                ourClintData.map((item)=>(
                    <OurClintData key={item.id} images={item.images}/>   
                )

                )
            }
        </div>

    </div>
    </>
  )
}

export default OurClint