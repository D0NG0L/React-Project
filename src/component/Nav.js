import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import slog from './../images/logo_dark.png'




const Nav = () => {
  const userr = useSelector((state) => state.user.user)
  return (
    <div class="container" >
      <div class="row">
        <div class="col-md-12" >
          <div className='nav' >
            <NavLink className='logo' to='products' ><img src={slog} /></NavLink>
            {JSON.stringify(userr) !== '{}' ? <p className='user-p' > {userr.usernam} </p> : <NavLink to='login'>LOGIN</NavLink>}
            <NavLink className='home-1' to='home' >HOME</NavLink>
            <NavLink to='pages'>PAGES</NavLink>
            <NavLink to='products'>PRODUCTS</NavLink>
            <NavLink to='blog'>BLOG</NavLink>
            <NavLink to='contact us'>CONTACT</NavLink>
            <NavLink to='cart'> < FaCartShopping /> </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav



{/* <div className='nav' >
      <NavLink className='logo' to='products' ><img src={slog} /></NavLink>
        {JSON.stringify(userr) !== '{}' ?<p className='user-p' > {userr.usernam} </p> : <NavLink  to='login'>LOGIN</NavLink>}
          <NavLink className='home-1' to='home' >HOME</NavLink>
          <NavLink to='pages'>PAGES</NavLink>
          <NavLink to='products'>PRODUCTS</NavLink>
          <NavLink to='blog'>BLOG</NavLink>
          <NavLink to='contact us'>CONTACT</NavLink>
          <NavLink to='cart'> < FaCartShopping /> </NavLink>  
      </div> */}


