import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    function updateJoystickClass() {
      const classNames = ['joystick'];
      Object.keys(keysDown).forEach((key) => {
        if (keysDown[key]) classNames.push(key);
      });
      joystick.className = classNames.join(' ');
    }

    const KEYS = [];
    KEYS[32] = 'pressed';
    KEYS[37] = 'left';
    KEYS[38] = 'up';
    KEYS[39] = 'right';
    KEYS[40] = 'down';
    const joystick = document.getElementById('joystick');
    const keysDown = {};
    document.addEventListener('keydown', (e) => {
      if (!KEYS[e.which]) return;
      e.preventDefault();
      keysDown[KEYS[e.which]] = true;
      updateJoystickClass();
    });
    document.addEventListener('keyup', (e) => {
      if (!KEYS[e.which]) return;
      e.preventDefault();
      keysDown[KEYS[e.which]] = false;
      updateJoystickClass();
    });
  }

  render() {
    return (
      <Fragment>
        <h1>iStick</h1>
        <div className="joystick" id="joystick">
          <div className="push-button-" />
        </div>
        <p>MMT-iStick</p>
      </Fragment>
    );
  }
}

export default App;
