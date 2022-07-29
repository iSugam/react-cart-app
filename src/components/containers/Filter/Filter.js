import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import Rating from './Rating'

const Filter = () => {

    const [rating, setRating] = useState(0);

    const clearFilter = () => {
        setRating(-1)
    }

  return (
    <div className='filter bg-dark'>
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
                style={{cursor: "pointer"}}
            />
        </span>
        <span>
            <label style={{padding: "10 0"}}>Rating:</label>
            <Rating 
                rating={rating}
                onClick={(i) => setRating(i)}
                style={{padding:"0 2px"}}
            />
        </span>
        <Button variant='light' onClick={clearFilter}>Clear Filter</Button>
    </div>
  )
}

export default Filter