import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:4000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      index: 0,
      eatenSushi: [],
      budget: 100
    }
  }

  // fetch sushi~
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({
        sushis: sushi
      })
    })
  }

  // show 4 sushi
  fourSushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  moreSushi = () => {
    if (this.state.index + 4 < this.state.sushis.length) {
      this.setState({
        index: this.state.index + 4
      })
    } else {
      this.setState({
        index: 0
      })
    }
  }

  eatSushi = (sushiObj) => {
    if (this.state.budget > sushiObj.price) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushiObj],
        budget: this.state.budget - sushiObj.price
      })
    } else {
      alert(`You have $${this.state.budget} left!`)
    }
  }

  // Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiBelt = {this.fourSushi()}
          moreSushi = {this.moreSushi}
          eatSushi = {this.eatSushi}
          eatenSushi = {this.state.eatenSushi}
        />
        <Table
          eatenSushi = {this.state.eatenSushi}
          budget = {this.state.budget}
        />
      </div>
    );
  }
}

export default App;