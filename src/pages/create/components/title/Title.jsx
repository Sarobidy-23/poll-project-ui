import React from 'react'
import './Title.css'

const Title = (props) => {
    const {title, description} = props

    return (
        <div className='title__container'>
            <div className='title__title'>{title}</div>
            <div className='title__decription'>{description}</div>
        </div>
    )
}

export default Title
