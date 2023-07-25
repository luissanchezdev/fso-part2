export default function Filter({ newSearch, handleNewSearch}) {
  return (
    <div>
      <label>Find countries</label>
      <input value={newSearch} onChange={handleNewSearch}/>
    </div>
  )
}
