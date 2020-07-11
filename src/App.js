import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Simon', age: 20 },
      { name: 'Test', age: 25 },
      { name: 'Scott', age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

const switchNameHandler = () => {
  setPersonsState({
    persons: [
      { name: 'Simon', age: 18 },
      { name: 'Test', age: 11 },
      { name: 'Scott', age: 22 }
    ]
  })
}

  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <p>This really is working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Football </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  
}

export default app;


/*
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
  } */