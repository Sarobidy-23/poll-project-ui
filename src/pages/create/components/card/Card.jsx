import React from 'react';
import './Card.css';

const Card = (props) => {
    const {children} = props

    return (
        <div className='card__fluid'>
            {children}
        </div>
    )
}

export default Card
