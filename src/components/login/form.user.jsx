import React from 'react';
import './style/form.login.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function RequestPassword (){ 
    return(
        <>
         <div className='Content'>
         <div className='Loginform'>
            <div className='seta'>
               <button>
               <Link to="/" style={{ textDecoration: 'none' }}>
                <BsArrowLeftShort/></Link>
               </button>
                
            </div>
         <h1>Request your Password</h1>
            <div className='RequestForm'> 
         
                <p>CPF</p>
                <input type="text" name="" id="username"/>
                <button id='Enter'>Enter</button>
            </div>

         </div>
         </div>
        </>
    )
}