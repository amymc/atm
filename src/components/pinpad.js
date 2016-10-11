import React from 'react';

class PinPad extends React.Component {
  render() {
    return (
      <div className="atm__pinpad">
         <button>1</button>
         <button>2</button>
         <button>3</button>
         <button>Cancel</button>
         <button>4</button>
         <button>5</button>
         <button>6</button>
         <button>Clear</button>
         <button>7</button>
         <button>8</button>
         <button>9</button>
         <button>Enter</button>
         <button disabled></button>
         <button>0</button>
         <button disabled></button>
         <button disabled></button>
      </div>
    );
  }
}

export default PinPad;