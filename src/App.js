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

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Bobby';
        this.setState({
            persons: [
                { name: newName, age: 27 },
                { name: 'Tom', age: 37 },
                { name: 'Bill', age: 34 }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'am React App</h1>
                <button onClick={() => this.switchNameHandler('Bobby')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={() => this.switchNameHandler('B')}>My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
          </div>
        );
    }
}

export default App;
