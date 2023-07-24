import React from 'react';

export default function Search({ termFilter, handleTermFilter }) {
  return (
    <div>
      <input onChange={handleTermFilter} value={termFilter} />
    </div>
  );
}
