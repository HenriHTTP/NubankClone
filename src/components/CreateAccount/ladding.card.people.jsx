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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, unde culpa corporis nulla minima delectus veniam quod.
                    </p>
                    <label>Lorem ipsum dolor</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}