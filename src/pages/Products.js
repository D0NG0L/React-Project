import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Container} from '@mui/material'
import './Prod.css'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../component/Card'


export const Products = () => {
   const [products,setproducts] = useState()
   const productdata = useSelector((state) => state?.cart?.items)

   
   useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((resp)=>setproducts(resp.data))
        },[])
       console.log(products);

       return (
         <Container className='container' maxWidth="lg"> 
      <div className='prod'>
      <h2 className='prod-title'> Our Products </h2>
      <div className='products-container' >
       {
         products?.map((prod)=> <Card key={prod.id} proda={prod}/>)
        }    
    </div>
    </div>
      </Container>
  )
}










// import { cartslice } from '../Redux/Cartslice'
// import { Button } from '@mui/material'
// import { Navigate } from 'react-router-dom'
// import { singleslice } from '../Redux/singlep'

//  console.log(productdata)

//  const arr = productdata.filter((value, index, self) =>
//     index === self.findIndex((t) => (
//     t.id === value.id
//   )))

//   const dispatch = useDispatch()

//  const added = (t)=>{
//   t.classlist.add('clicked')
// } 


// {
//   products?.map((prod)=>(
  //    <div className='single-product' key={prod.id}>
//    <img src={prod.image}/> 
//    <h3> {prod.title} </h3>
//    <p> price : {prod.price}LE </p>
//    <Button variant="contained"
//   onClick={(e)=>{dispatch(cartslice.actions.addtocard(prod))
//    added(e.target)
//  }}
//   >add to card</Button>   
//  <Button onClick={()=>{
//    Navigate(`${prod.id}`)
//    dispatch(singleslice.actions.getprod(prod))
//  }} > Show more</Button>
//   </div>
  
//   )) 
//   }

//   <div>
//   {
//  productdata.lenght == 0 ? <h3> nothing found </h3> :
//  productdata?.map((r)=>(
//    <div className='single-product'
//      key={r.id}>
//      <img src={r.image} />
//      <a href="#">{r.title}</a>
//      <h3> price :{r.price} L.E</h3>
//      <p>{r.category}</p>
//      <div>
//        <Button variant="contained" onClick={()=>
//           dispatch(cartslice.actions.removefromcart(r))}> Remove </Button>
//      </div>
//    </div> ))}
//   </div>
//   <div>
// {productdata.title}
// </div>