
import React from 'react'
import './style/ladding.card.market.css'
export default function MarketCard ({backgroundColor,TextValue,TiltleText,TextContent,color}){ 
    return( 
        <>
        <div className='ContentMarketMarket' style={{ backgroundColor:backgroundColor}}>
            <div className='MarketPhaseContent' > 
            <main>
                <h1 style={{ color:color}}> {TiltleText}</h1>
                <p style={{ color:color}}>{TextContent}</p> 
            </main>
            </div>
            <div className='NumberContent'> 
                <h1 tyle={{ color:color}} >{TextValue}</h1>
                
            </div>
        </div>
        </>
    )
}