import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Hi, I'am React App</h1>
          <Person name="Bob" age="27" />
          <Person name="Tom" age="37">My Hobbies: Racing</Person>
          <Person name="Bill" age="24" />
      </div>
    );
  }
}

export default App;
