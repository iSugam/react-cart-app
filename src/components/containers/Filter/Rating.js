import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating = ({ rating, onClick, style}) => {
  return (
    <>
        {
            [...Array(5)].map((_, i) => {
                return <span key={i} onClick={()=> onClick(i)} style={style} className='rating'>
                    {
                        rating >= i ? (
                            <AiFillStar />
                        ) :
                            <AiOutlineStar />
                    }
                </span>
            })
        }
    </>
  )
}

export default Rating