import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import FormAddPerson from './FormAddPerson';
import InfoPerson from './InfoPerson';

function App() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log({persons})
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('server response')
        setPersons(response.data)
      })

  }, [])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [termFilter, setTermFilter] = useState('');

  const today = new Date().getTime();

  const handleNewUser = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleTermFilter = (event) => {
    setTermFilter(event.target.value);
  };

  const newPersons = persons.filter((person) => (
    person.name.toLowerCase().includes(termFilter.toLocaleLowerCase())
  ));

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newName === '') {
      alert('Write a username');
    } else {
      const verifyUser = persons.some((person) => (
        person.name.toLowerCase() === newName.toLowerCase()
      ));
      if (verifyUser === false) {
        const newPerson = {
          name: newName,
          number: newNumber,
        };
        setPersons([...persons, newPerson]);
        setNewName('');
        setNewNumber('');
      } else if (verifyUser === true) {
        alert(`${newName} is already added to phonebook`);
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        handleTermFilter={handleTermFilter}
        termFilter={termFilter}
      />
      <h2>Add a new</h2>
      <FormAddPerson 
        newName={newName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        handleNewUser={handleNewUser}
        handleAddUser={handleAddUser}
      />
      <h2>Numbers</h2>
      {newPersons.map((person) => (
        <li key = {Math.random() * today}>
          <InfoPerson 
            name={person.name}
            number={person.number}
          />
        </li>
      ))}
    </div>
  );
}

export default App;
