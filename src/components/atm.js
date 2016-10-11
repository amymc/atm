import React from 'react';

import Message from './message';
import PinPad from './pinpad';


class ATM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Welcome. Please insert your card.",
      bar: 'no'
    };
  }

  render() {
    return (
      <div> ATM TEST
        <Message text={this.state.text}/>
        <PinPad />
        </div>
    );
  }
}

export default ATM;