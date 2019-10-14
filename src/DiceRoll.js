import React, { Component } from 'react';

class DiceRoll extends Component {

diceRoll = () =>{
    const newRoll = Math.floor(Math.random() * 6 + 1)
    this.props.componentDiceRoll(newRoll)
}
  render() {
    return (
      <div>
        <button onClick = {this.diceRoll}>{this.props.arrayComponent}
          </button>
          <h3>Roll the Dice</h3>
      </div>
    );
  }
}


export default DiceRoll;
