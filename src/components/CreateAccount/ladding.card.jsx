import React from 'react';
import './style/ladding.card.css'
import imgCard from './img/cardimg.png'
import PhoneCard from './img/phone.png'

export let LaddingCard = () => { 
    return(
        <>
        <div className='ContentLadding'> 
        <div className='ContentCenter'>
            
            <div className='CardPhone'> 

                <h1>
                    Digital BankAccount
                </h1>
                <img src={PhoneCard} alt="img" />

                <p>access your account on your mobile</p>

            </div>
                  
            <div className='CardCard'> 
                
                <h1>
                    Credit Card
                </h1>

                <img src={imgCard} alt="img" />
                <p>have your card anytime</p>

            </div>
         </div>   
        </div>   
        </>
    )
}