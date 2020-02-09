import React, { Component } from 'react'
// import { Button } from './components'
import  { ListCard } from './components'
import './App.scss'

const header = "Header"
const list = ["Item 1", "Item 2", "Item 3 is longer, to test wrapping"]
class App extends Component {

  constructor() {
    super()
    this.whichtheme = "light"
  }

  render() {
    const divClass = `App component-list ${this.whichtheme}`
    return (
      <div className={divClass}>
        <header>
          <h1>Components</h1>
        </header>
        <div className={divClass}>
          {/*<Button href="#" theme='go' style={ { margin: "0 0 10px 0"}}> Button </Button>*/}
          <ListCard theme={this.whichtheme}  header={header} items={list}/ >

       </div>
      </div>
    )
  }
}

export default App
