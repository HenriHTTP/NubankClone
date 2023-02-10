import React from 'react';
import { useState } from 'react';
import './style/form.login.css'
import { Link } from 'react-router-dom';

export  default function FormLogin (){ 
    
    const [User,setUser] = useState ()
    const [Pass,setPass] = useState ()

    const password = document.getElementById('pass')
    const username = document.getElementById ('username')

    const DateLogin = () => {

         return true
    }

    const moveOnP = () => { 
        let movepass = document.getElementById('PassP')
        movepass.style.fontSize = '1.1em'
        movepass.style.color = 'blueviolet'
    }
    const moveOutP = () => { 
        let movepass = document.getElementById('PassP')
        movepass.style.fontSize = '1.3em'
        movepass.style.color = 'black'
    }
    const moveOnU = () => { 
        let movepass = document.getElementById('UserP')
        movepass.style.fontSize = '1.1em'
        movepass.style.color = 'blueviolet'


    }
    const moveOutU = () => { 
        let movepass = document.getElementById('UserP')
        movepass.style.fontSize = '1.3em'
        movepass.style.color = 'black'
    }


    return ( 
        <>
        <div className='Content'>
            <div className='Loginform'>
                <h1>Login</h1>
                <p id='UserP'>CPF</p>
                <input onFocus={moveOnU}  onBlur={moveOutU}type="text" name="" id="username" onChange={e => setUser(e.target.value)}/>
                <p id='PassP'>Password</p>
                <input onBlur={moveOutP} onFocus={moveOnP}  type="password" name="" id="pass" onChange={e => setPass(e.target.value)}/>

                <button id='Enter'onClick={DateLogin}>Enter</button>
                <label><Link to="/requestPassword" style={{ textDecoration: 'none' }}>Forgot username?</Link></label>
                <label><Link to="/createAccount" style={{ textDecoration: 'none' }}>Create account?</Link></label>
            </div>
        </div>
    </>
    )
}
