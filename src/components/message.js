import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <p className="atm__message">
        {this.props.text}
      </p>
    );
  }
}

export default Message;