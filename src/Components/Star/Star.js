import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"

const Star = ({stars,reviews}) => {

    const ratingStar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5;

        return(
            <span key={index}>
                {
                    stars >=index+1 ?(
                        <FaStar className='text-amber-600 mr-[2px]'/>
                    ): stars >=number?(
                        <FaStarHalfAlt className='text-amber-600  mr-[2px]'/>
                    ):(
                        <AiOutlineStar className='text-amber-600  mr-[2px]'/>
                    )
                }
            </span>
        )
    })
  return (
    <div className='flex my-2'>
        <p className='flex'>{ratingStar}</p>
        <p>({reviews} customers reviews)</p>
        </div>
  )
}

export default Star