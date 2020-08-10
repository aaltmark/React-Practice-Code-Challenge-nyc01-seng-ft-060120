import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    plates: []
  }


  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({
        sushis: data
      }))
  }

  appSushiClicker = (id, price) => {
    this.setState({money: this.state.money - price})
    let newPlateArray = [...this.state.plates, id]
    this.setState({plates: newPlateArray})
  }

  render() {
    console.log(this.state.plates)

    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} appSushiClicker={this.appSushiClicker} money={this.state.money}/>
        <Table money={this.state.money} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;