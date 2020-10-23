import React from 'react';
import './card-list.styles.css'
import {Card} from '../Card-List/card.component'



export const CardList = (props)=>
{    
    return (    
        <div className='card-list'>
            {props.propMonsters.map((monsters)=> {
                if (monsters.name.toLowerCase().includes(props.searchSt.toLowerCase()))
                    {                        
                        return <Card  key={monsters.name} cardContent= {monsters}/>}
            })}
        </div>    
    )
}