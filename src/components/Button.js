import React from 'react';
import PropTypes from 'prop-types';
import "../style/Button.css"


const Button = ({variant, load, text, action}) =>{
    return(
        <button className={`btn-${variant}`} onClick={action}>
            {load ? "Loading..." : text}
        </button>
    )
}

Button.prototype ={
    text : PropTypes.string.isRequired,
    variant : PropTypes.string.isRequired,
    action : PropTypes.func.isRequired
}

export default Button;