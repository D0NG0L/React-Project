import React from 'react'
import { cartslice } from '../Redux/Cartslice'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { singleslice } from '../Redux/singlep'

export const Card = (props) => {

  const dispatch =useDispatch()

  const added = (t)=>{
  t.classList.add('clicked')
} 


const navigate =useNavigate()
  
return (
    <div className='single-product'>
          <img src={props.proda?.image}/>
          <a href="#"> {props.proda?.title}</a>
          <h3> price : {props.proda?.price} L.E</h3>
          <p>{props.proda?.category}</p>  
          
          
          <div>
           <Button variant="contained"
           onClick={(e)=>{dispatch(cartslice.actions.addtocard(props?.proda))
            added(e.target)}} >add to card</Button>   
          
          <Button onClick={()=>{
           navigate(`${props.proda.id}`)
            dispatch(singleslice.actions.getprod(props.proda))}}>Show more</Button>
 
          </div> 
        
        </div>
  )
}



















{/* <Link to={`${props.proda.id}`}> show more </Link>  */}