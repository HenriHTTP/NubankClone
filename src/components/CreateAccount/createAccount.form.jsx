import React from 'react'
import { Link } from 'react-router-dom'
import './style/createAccount.form.css'
import { LaddingCard } from './ladding.card'
import CardPeople from './ladding.card.people'
import MarketCard from './ladding.card.market'

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
                        <button><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Enter</Link></button>
                    </div>
                    
                </div>
            </div>
            <LaddingCard/>
            <CardPeople/>
            <MarketCard  TiltleText={'loorem ipsum dolor'} TextContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus doloribus veritatis eveniet.'} TextValue={'0,00'}  backgroundColor={'whiteSmoke'}/> 
            <MarketCard color={'white'}  TiltleText={'loorem ipsum dolor dolor sit amet consectetur'}  TextContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus doloribus veritatis eveniet.'}  backgroundColor={'blueviolet'} TextValue={''}/> 
        </>
    )
}