import React from 'react'
import '../Card-List/card.styling.css'

export const Card = (props)=>{
    return (
    
    <div className='card-stl'>
        <img alt='' src={`https://robohash.org/${props.cardContent.id}?set=set4&size=30x120`}/>
        <h4>{props.cardContent.name}</h4>
        <div>{props.cardContent.email}</div>
    </div>
    
 )

}