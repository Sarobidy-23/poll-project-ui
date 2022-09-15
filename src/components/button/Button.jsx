import React from 'react';
import './Button.css'


const Button = (props) => {
    const { onClickButton, title, types } = props;

    return (
        <div className={`${types ? types : 'button'}`} onClick={()=>{{onClickButton()}}}>
            {title}
        </div>
    )
}

export default Button;