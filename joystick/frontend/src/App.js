import React, { Component } from 'react';
import './App.css';
import up from './assets/up.png';
import left from './assets/left.png';
import right from './assets/right.png';
import down from './assets/down.png';
import rightUp from './assets/up-right.png';
import rightDown from './assets/right-down.png';
import leftUp from './assets/left-up.png';
import leftDown from './assets/left-down.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [],
      user: ['joystick up right', 'joystick up left', 'joystick up', 'joystick down'],
      stick: 'joystick up left', //
      a: false,
      b: false,
      c: true,
      d: false,
    };
  }

  componentDidMount() {}

  diffCommand() {}

  makeImg(key, index) {
    if (key === 'joystick up') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${up})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick down') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${down})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick left') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${left})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick right') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${right})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick up right') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${rightUp})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick up left') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${leftUp})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick down right') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${rightDown})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    if (key === 'joystick down left') {
      return (
        <div
          key={index}
          className="show-icon"
          style={{ backgroundImage: `url(${leftDown})`, backgroundRepeat: 'no-repeat' }}
        />
      );
    }
    return null;
  }

  render() {
    const {
      user, stick, a, b, c, d,
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
        <div>{user.map((key, index) => this.makeImg(key, index))}</div>
      </div>
    );
  }
}

export default App;
