import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id: '0', name: 'Bob', age: 27 },
            { id: '1', name: 'Tom', age: 37 },
            { id: '2', name: 'Bill', age: 24 }
        ],
        showPersons: false
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

    deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
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
                    {this.state.persons.map( (person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>
                    })}
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
