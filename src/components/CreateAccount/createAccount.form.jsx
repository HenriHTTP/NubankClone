import React from 'react'
import { Link } from 'react-router-dom'
import './style/createAccount.form.css'
import { LaddingCard } from './ladding.card'
import CardPeople from './ladding.card.people'

export default function CreateAccount (){ 
    return (
        <>
            <div className='Content'>
                <div className='Market'>

                    <div className='ContentMarket'> 
                     <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus doloribus veritatis eveniet.</h1> 
                    </div>

                </div>
                   <div className='Market'>
                   
                   <div className='ContentMarketForm'>
                        <label>Lorem ipsum dolor sit amet consectetur!</label>
                        <p>type it cpf</p>
                        <input placeholder='type it here' type="text" name="" id="" />
                        <button><Link to="/createAccount" style={{ textDecoration: 'none', color: 'white' }}>Enter</Link></button>
                    </div>
                    
                </div>
            </div>
            <LaddingCard/>
            <CardPeople/>
        </>
    )
}