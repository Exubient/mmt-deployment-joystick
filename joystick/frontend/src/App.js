import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stick: 'joystick up right',
      a: false,
      b: false,
      c: true,
      d: false,
    };
  }

  componentDidMount() {
  }

  render() {
    const {
      stick, a, b, c, d,
    } = this.state;
    return (
      <div className="container">
        <h1>iStick</h1>
        <div className={stick} id="joystick">
          <div className={a ? 'push-button-a pressed' : 'push-button-a'} />
          <div className={b ? 'push-button-b pressed' : 'push-button-b'} />
          <div className={c ? 'push-button-c pressed' : 'push-button-c'} />
          <div className={d ? 'push-button-d pressed' : 'push-button-d'} />
        </div>
        <p>MMT-iStick</p>
      </div>
    );
  }
}

export default App;
