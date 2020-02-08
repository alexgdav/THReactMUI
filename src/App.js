import React, { Component } from 'react';
import { Button } from './components';
import  { ListCard } from './components'

import './App.scss';

const header="Header"
const list = ["Item 1", "Item 2", "Item 3"]
class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <ListCard header={header} items={list}/ >
          <Button href="#" theme='go'> Button </Button>

        </div>
      </div>
    );
  }
}

export default App;
