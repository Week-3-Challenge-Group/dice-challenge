
import './App.css';

import React, { Component } from 'react';
import DiceRoll from './DiceRoll'
import RollList from './RollList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      completedRolls: []
    }
  }
  
  handleChange = (number) => {
    const rolls = this.state.completedRolls
    rolls.push(number) 
    this.setState({completedRolls: rolls})
  }
  
  render() {
    return (
      <div>
        <div className="Dice_Button">
          <DiceRoll componentDiceRoll = {this.handleChange} arrayComponent = {this.state.completedRolls[this.state.completedRolls.length - 1]}/>
        </div>
        <div className="Roll_List">
          <RollList listComponent={this.state.completedRolls} />
        </div>
      </div>
    );
  }
}


export default App;
