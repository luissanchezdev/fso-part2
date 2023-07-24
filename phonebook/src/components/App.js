import React, { useState } from 'react';
import Search from './Search';
import FormAddPerson from './FormAddPerson';
import InfoPerson from './InfoPerson';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
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
