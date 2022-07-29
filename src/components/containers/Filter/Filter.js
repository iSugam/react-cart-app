import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import Rating from './Rating'

const Filter = () => {

    const [rating, setRating] = useState(4)

  return (
    <div className='filter'>
        <span className="title">Filter Products</span>
        <span>
            <Form.Check
                inline
                label= "Ascending"
                name= "group1"
                type='radio'
                id={`inline-1`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "Descending"
                name= "group1"
                type='radio'
                id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "Includes Out of Stock"
                name= "group1"
                type='checkbox'
                id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "Fast Delivery"
                name= "group1"
                type='checkbox'
                id={`inline-4`}
            />
        </span>
        <span>
            <label style={{padding: 10}}>Rating:</label>
            <Rating onClick={(i) => setRating(i)} rating={rating} style={{cursor: "pointer"}}/>
        </span>
        <Button variant='light'>Clear Filter</Button>
    </div>
  )
}

export default Filter