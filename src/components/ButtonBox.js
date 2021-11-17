import React from 'react'
import './ButtonBox.css'
import Button from './Button.js'

function ButtonBox(props) {
  const buttons = props.buttonValues.map((item, index) => <Button value={item} key={index} handleClick={props.handleClick}  />)
  return(
    <div className="button-box">
      {buttons}
    </div>
  )
}

export default ButtonBox
