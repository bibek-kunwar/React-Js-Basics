import React from "react";
export default class prfile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'waran',
      gmail:'kunwarbibek9233@gmail.com'
    }
  }
  updateState() {
    this.setState({
      name: 'bibek',
    })
  }
  render() {
    return (
      <div>
        <h1>hellow {this.state.name}</h1>
        <h1>emai {this.state.gmail}</h1>
        <button onClick={() =>{this.UpdateState()} }>Update BTN </button>
      </div>
    )
  }
}