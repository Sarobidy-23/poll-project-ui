import React from "react"
import './Card.css'

const Card = (props) => {
    const {data} = props
    
    return (
        <div className="card__container">
            <div className="card__image"></div>
            <div className="card__footer">
                <div className="card__title">Evaluation</div>
                <div className="card__details">
                    <div className="card__date">20h</div>
                    <div className="card__option">
                        <i className="fa fa-ellipsis-v"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
