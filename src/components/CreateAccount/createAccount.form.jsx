import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './style/createAccount.form.css'
import { LaddingCard } from './ladding.card'
import CardPeople from './ladding.card.people'
import MarketCard from './ladding.card.market'
import { useState } from 'react'

export default function CreateAccount (){ 
    const [cpf , setCpf] = useState('')
    
    const handlemaskCpf = (args) => {
            
            let mask = args.target.value // get value input cep
            let positionMask = mask.split('')// remove ''
            let masklength = positionMask.length //transform in array
        
            if(masklength === 3){ //positon array  5  condicion 
               args.target.value += '.'
               console.log(args.target.value)
            } 
            if(masklength === 7){ 
                args.target.value += '.'
                console.log(args.target.value)
             } 
             if(masklength === 11){ 
                args.target.value += '-'
                console.log(args.target.value)
             }
            
             let CPF =  args.target.value
             setCpf(CPF)

        }
    return (
        <>
            <div className='Content2'>
                <div className='Market'>

                    <div className='ContentMarket'> 
                     <h1> welcome to our platform be creative create an account in a new world of opportunities.</h1> 
                    </div>

                </div>
                   <div className='Market'>
                   
                   <div className='ContentMarketForm'>
                        <label> Ask for your Nubank account and credit card</label>
                        <p>{cpf}</p>
                        <input placeholder='000.000.000-00' type="text" name="" id="" maxLength={14} onChange={handlemaskCpf
                         }/>
                        <button><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Enter</Link></button>
                    </div>
                    
                </div>
            </div>
            <LaddingCard/>
            <CardPeople/>
            <MarketCard  TiltleText={'The account that will put you in control of your financial life.'} TextContent={'here you have no fee on your purchases'} TextValue={'0,00'}  backgroundColor={'whiteSmoke'}/> 
            <MarketCard color={'white'}  TiltleText={'PJ You can call him purple. Also, you can call it modern, free and practical too.'}  TextContent={'Control your business with real human support.'}  backgroundColor={'blueviolet'} TextValue={''}/> 
        </>
    )
}