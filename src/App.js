import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Bob', age: 27 },
            { name: 'Tom', age: 37 },
            { name: 'Bill', age: 24 }
        ],
        showPersons: false
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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Bob', age: 27 },
                { name: event.target.value, age: 37 },
                { name: 'Bill', age: 34 }
            ]
        });
    };

    togglePersonsHandler = () => {
        this.setState({
           showPersons: !this.state.showPersons
        });
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons =
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={() => this.switchNameHandler('B')}
                        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
                </div>
        }


        return (
            <div className="App">
                <h1>Hi, I'am React App</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
          </div>
        );
    }
}

export default App;
