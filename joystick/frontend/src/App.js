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
      answer: ['joystick up', 'joystick down'],
      user: [
        'joystick up right',
        'joystick up left',
        'joystick up',
        'joystick down',
        'a',
        'b',
        'c',
        'd',
      ],
      stick: 'joystick up left', //
      a: false,
      b: false,
      c: true,
      d: false,
    };
  }

  componentDidMount() {}

  diffCommand(answer, user) {
    for (let i = 0; i < user.length; i += 1) {
      if (user[i] !== answer[i]) return false;
    }
    return true;
  }

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
    if (key === 'a') {
      return (
        <div key={index} className="show-icon-button">
          a
        </div>
      );
    }
    if (key === 'b') {
      return (
        <div key={index} className="show-icon-button">
          b
        </div>
      );
    }
    if (key === 'c') {
      return (
        <div key={index} className="show-icon-button">
          c
        </div>
      );
    }
    if (key === 'd') {
      return (
        <div key={index} className="show-icon-button">
          d
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      answer, user, stick, a, b, c, d,
    } = this.state;

    return (
      <div className="container">
        <h1>MMT-iStick</h1>
        <div className={stick} id="joystick">
          <div className={a ? 'push-button-a pressed' : 'push-button-a'} />
          <div className={b ? 'push-button-b pressed' : 'push-button-b'} />
          <div className={c ? 'push-button-c pressed' : 'push-button-c'} />
          <div className={d ? 'push-button-d pressed' : 'push-button-d'} />
        </div>
        <h3>answer</h3>
        <div>{answer.map((key, index) => this.makeImg(key, index))}</div>
        <h3
          style={{
            color: user.length > 0 ? (this.diffCommand(answer, user) ? 'blue' : 'red') : 'black',
          }}
        >
          {user.length > 0 ? (this.diffCommand(answer, user) ? 'good' : 'idiot') : 'please~'}
        </h3>
        <div>{user.map((key, index) => this.makeImg(key, index))}</div>
      </div>
    );
  }
}

export default App;
