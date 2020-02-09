import React, { Component } from 'react';
// import { Button } from './components';
import  { ListCard } from './components'

import './App.scss';

const header = "Header"
const list = ["Item 1", "Item 2", "Item 3 is longer, to test wrapping"]
class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          {/*<Button href="#" theme='go' style={ { margin: "0 0 10px 0"}}> Button </Button>*/}
          <ListCard theme="dark" header={header} items={list}/ >

       </div>
      </div>
    );
  }
}

export default App;
