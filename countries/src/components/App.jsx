import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./Filter"
import Country from "./Country"

export default function App() {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [expandView, setExpandView]  = useState(false)
  const [dataWeather, setDataWeather] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter
        newSearch={newSearch}
        handleNewSearch={handleNewSearch}
      />
      <Country 
        countries = {countries}
        newSearch={newSearch}
        expandView={expandView}
        setExpandView={setExpandView}
        setCountries={setCountries}
        dataWeather={dataWeather}
        setDataWeather={setDataWeather}
      />
    </div>
  )
}