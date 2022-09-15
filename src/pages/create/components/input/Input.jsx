import React from "react";
import './Input.css'

const Input= (props) => {
    const {type, label, collect, primary, placeholder, add} = props;
    const collectValue = (e) => {
         collect(e.target.value)
    }

    return (
        <>
            {primary ? <h1>{label}</h1> : 
                <span>{label}</span>
            }
            <div className="input__container">
                <input type={type} 
                    placeholder={placeholder}
                    className='input__element'
                    onChange={(e)=>collectValue(e)}/>
                <div className="input__add" onClick={()=>add()}>
                    <i className="fa fa-plus"/>
                </div>
            </div>
        </>
    )
}


export default Input