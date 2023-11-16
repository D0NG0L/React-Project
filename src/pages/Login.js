import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userslice } from '../Redux/userslice'
import './Login.css'
import lsora from '../images/menu_banner1.jpg'



export const Login = () => {
    const [users, setusers] = useState()
    const [name, usename] = useState()
    const [pass, usepass] = useState()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users').then((resp) => setusers(resp.data)).catch((err) => console.log(err))
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handlelogin = () => {
        const user = users?.filter((r) => {
            if (r.username == name)
                if (r.password == pass) {
                    dispatch(userslice.actions.getuserdata(r))
                    navigate('/products')
                    return r
                }
        })
        console.log(user)
        if (user == 0) {
            document.querySelector('.wrong ').innerHTML = ' Wrong Username Or Password'
        }
    }

    return (
        <div class="container" >
            <div class="row">
                <div class="col-md-12" >
                    <div className='log-container'  >
                        <div >
                            <input className='l-btn1' type='text' placeholder='User name' onChange={(e) => usename(e.target.value)} />
                            <input className='l-btn1'  type='password' placeholder='Password' onChange={(e) => usepass(e.target.value)} />
                            <button className='log-btn' onClick={() => handlelogin()}> LOGIN </button>
                        </div>
                        <div className='l-input'>
                            <p className=' wrong ' ></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}









// <Container className='log-cont' maxWidth="lg">
//             <div  className='log-imges'>
//             <img src={lsora} />
//             <img src={lsora1} />
//             <img src={lsora2} />
//             </div>

//             <div className='log-content'>
//             <input className='log-t' type='text' placeholder='User name' onChange={(e) => usename(e.target.value)} />
//             <input className='log-p' type='password' placeholder='Password' onChange={(e) => usepass(e.target.value)} />
//             <button className='log-btn' onClick={() => handlelogin()}> Login </button>
//             <p className=' wrong ' ></p>
//             </div>



//         </Container>
