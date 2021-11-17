import React from 'react'
import './Button.css'

function Button(props) {
  const buttonClass = props.value === "=" ? "equals button" : "button"
  return(
      <button className={buttonClass} onClick={(event) => {props.handleClick(props.value)}}>{props.value}</button>
  )
}

export default Button
