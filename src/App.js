import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Simon', age: 20 },
      { name: 'Test', age: 25 },
      { name: 'Scott', age: 30 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log("Clicked!")
    this.setState({
      persons: [
        { name: 'Simon', age: 18 },
        { name: 'Test', age: 11 },
        { name: 'Scott', age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This really is working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Football </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
