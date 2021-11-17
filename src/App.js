import React from 'react'
import './App.css';
import Display from './components/Display.js'
import ButtonBox from './components/ButtonBox.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0,
      result: 0,
      operator: '',
      buttonValues: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', ',', '0', '+', 'C', '=' ]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleComma = this.handleComma.bind(this)
  }

  handleClick(value) {
      if (value === "C") {
        this.handleReset()
      } else if (value === "=") {
        this.handleEquals()
      } else if (value === ",") {
        this.handleComma()
      } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        this.handleOperator(value)
      } else {
        this.handleNumber(value)
      }
  }

  handleReset() {
    this.setState({
      number: 0,
      result: 0,
      operator: ''
    })
  }

  handleEquals() {
    this.setState(prevState => ({
      number: 0,
      result: prevState.operator === "+"
            ? Number(prevState.result) + Number(prevState.number)
            : prevState.operator ==="-"
            ? Number(prevState.result) - Number(prevState.number)
            : prevState.operator === "*"
            ? Number(prevState.result) * Number(prevState.number)
            : Number(prevState.result) / Number(prevState.number) ,
      operator: ''
    }))
  }

  handleComma() {
    this.setState(prevState => ({
      number: prevState.number.toString().includes(".") ? prevState.number : prevState.number + "."
    }))
  }

  handleOperator(operator) {
    this.setState(prevState => ({
      number: 0,
      result: !prevState.result && prevState.number ? prevState.number : prevState.result,
      operator: operator
    }))
  }

  handleNumber(value) {
    this.setState(prevState => ({
      number: value === "0" && prevState.number === 0
              ? 0
              : prevState.number % 1 === 0 //prevState er ikke streng (NaN)
              ? Number(prevState.number + value)
              : prevState.number + value,
      result: prevState.operator ? prevState.result : 0
    }))
  }

  render() {
    return (
      <div className="App">
          <Display value={this.state.number ? this.state.number : this.state.result} />
          <ButtonBox buttonValues={this.state.buttonValues} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
