import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Single.css'

export const Singlep = () => {

  const prod =useSelector((state)=>state.singlep.item)
  
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div className='single'>
            <img className='img' src={prod?.image} />
            <h3> price : {prod?.price} L.E</h3>
            <a> {prod?.title}</a>
            <p>{prod?.category}</p>
            <p>{prod?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

















// const params = useParams()
// const pid = params.id

// const [product,setproduct]= useEffect()
// useEffect(()=>{
// axios.get(`https://fakestoreapi.com/products/${pid}`).then((resp)=>setproduct(resp.data)).catch((err).console.log(err))
// },[])

// {product?.title}   