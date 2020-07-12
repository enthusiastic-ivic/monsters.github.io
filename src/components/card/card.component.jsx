import React from 'react';
import './card.styles.css';

export const Card=props=>(
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}></img>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
);