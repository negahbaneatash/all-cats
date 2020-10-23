import React from 'react'
import '../Card-List/searchbox.style.css'

export const SearchBox = (props)=>{
    return(
        <input className='search'
        placeholder={props.placeHolder}  
        // onInput={
        //     (e)=>{this.setState({searchString:e.target.value},()=>console.log(this.state.searchString))}
        // }      
        onChange={props.handleChange}
        />
    )
}



