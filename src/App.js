import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Bob', age: 27 },
            { name: 'Tom', age: 37 },
            { name: 'Bill', age: 24 }
        ]
    };

    switchNameHandler = () => {
        console.log('Was clicked!');
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'am React App</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
        );
    }
}

export default App;
