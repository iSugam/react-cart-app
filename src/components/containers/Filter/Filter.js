import React from 'react'
import { Form, Button } from "react-bootstrap"
import { CartContext } from '../../Hooks/Context'
import Rating from './Rating'

const Filter = () => {

    const {filterState: {
        byPrice,
        byDescending,
        byStock,
        byFastDelivery,
        byRating,
        sort,
        searchQuery}, filterDispatch} = CartContext();

    console.log(byPrice,
    byDescending,
    byStock,
    byFastDelivery,
    byRating,
    sort,
    searchQuery);

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
                onChange={() => {
                    filterDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh"
                    })
                }}
                checked={sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "Descending"
                name= "group1"
                type='radio'
                id={`inline-2`}
                onChange={() => {
                    filterDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow"
                    })
                }}
                checked={sort === "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "Includes Out of Stock"
                name= "group1"
                type='checkbox'
                id={`inline-3`}
                onChange={() => {
                    filterDispatch({
                        type: "SORT_BY_STOCK"
                    })
                }}
                checked={byStock}
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
                onChange={() => {
                    filterDispatch({
                        type: "SORT_BY_FASTDELIVERY"
                    })
                }}
                checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{padding: "10 0"}}>Rating:</label>
            <Rating 
                rating={byRating}
                onClick={(i) => filterDispatch({
                    type: "SORT_BY_RATING",
                    payload: i
                })}
                style={{padding:"0 2px"}}
            />
        </span>
        <Button variant='light' onClick={() => {
            filterDispatch({
                type: "CLEAR_FILTER"
            })
        }}>Clear Filter</Button>
    </div>
  )
}

export default Filter