import React from 'react'
import People from './img/people.png'
import './style/ladding.card.people.css'

export default function  LaddingCardPeole () { 
    return(
        <>
        <div className='ContentPeople'>
            <div className='ContentPeopleCenter'> 
                <div className='CardPeople'> 

                    <img src={People} alt="" />

                </div>
                <div className='CardMarketPeople'>  
                    <div className='CardMarketPeopleContent'>
                    <h1> 
                        The account that will put you in control of your financial life.
                    </h1>
                    <p>
                        The premium credit card for you to live all your choices.
                    </p>
                    <label>read more</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}