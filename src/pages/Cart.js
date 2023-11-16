import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartslice } from '../Redux/Cartslice'
import { Button, Container } from '@mui/material'

export const Cart = () => {
  
  const productdata = useSelector((state) => state?.cart?.items)
  
  console.log(productdata)

  const arr = productdata.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.id === value.id
    )))
  const dispatch = useDispatch()
  return (

    <Container maxWidth='md'>
      <div className='cart-main'>
        <div className='cart-container' >
          {productdata.lenght == 0 ? <h3> nothing found </h3> :
              arr?.map((r) => (
                <div className='single-product'
                  key={r.id}>
                  <img src={r.image} />
                  <a href="#">{r.title}</a>
                  <h3> price :{r.price} L.E</h3>
                  <p>{r.category}</p>
                  <div>
                    <Button variant="contained" onClick={() =>
                      dispatch(cartslice.actions.removefromcart(r))}> Remove </Button>
                  </div>
                </div>))}
        </div>
      </div>
    </Container>
  )
}
