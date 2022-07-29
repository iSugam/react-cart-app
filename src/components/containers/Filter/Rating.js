import React from 'react'
import { BsStarFill, BsStar } from "react-icons/bs"

const Rating = ({ rating, onClick, style}) => {
  return (
    <div>
        {
            [...Array(5)].map((_, i) => {
                <span key={i} onClick={()=> onClick(i)} style={style}>
                    {
                        rating > i ? (
                            <BsStarFill fontSize = "25px" />
                        ) :
                            <BsStar fontSize = "25px" />
                    }
                </span>
            })
        }
    </div>
  )
}

export default Rating