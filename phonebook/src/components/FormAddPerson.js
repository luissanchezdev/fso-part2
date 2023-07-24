import React from 'react';

export default function FormAddPerson({ newName, newNumber, handleNewNumber, handleNewUser, handleAddUser }) {
  return (
    <form onSubmit={handleAddUser}>
      <div>
        name:
        {' '}
        <input onChange={handleNewUser} value={newName} pattern="[A-Za-z]*" title="Only letters" />
      </div>
      <div>
        number:
        {' '}
        <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
