import React from 'react';
import './style.scss';

function Card(props){
    const {img, name} = props
    
    return(
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img src={img} alt={name}/>
            </div>
            <div className='tituloContainer'>
                <p> {name}</p>
            </div>
        </div>
    )
}

export default Card;