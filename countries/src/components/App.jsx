import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./Filter"
import Country from "./Country"

export default function App() {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    console.log({ countries })
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(`Data: ${response.data}`)
        setCountries(response.data)
      })
  }, [])

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const countriesFilter = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))

  const countFilterCountries = countriesFilter.length

  const showCountries = () => {
    if (newSearch === '' ){
      return ''
    }

    if (countFilterCountries === 1) {
      const languagesCountry = countriesFilter.languages
      console.log(languagesCountry)
      return (
        countriesFilter.map((country, index) => {
          const countryLanguages = country.languages
          console.log(countryLanguages)
          for (const lang in countryLanguages) {
            <p>{countryLanguages[lang]}</p>
          }
          return (
            <div key={index}>
              <h3>{country.name.common}</h3>
              <p>{country.capital}</p>
              <p>population: {country.population}</p>
              <h4>languages</h4>
              
            </div>
          )
        })
      )
    } else if( countFilterCountries > 10 ) {
      return 'Too many matches, specify another filter'
    } else {
      return countriesFilter.map((country, index) => <Country key={index} country={country} />)
    }
  }


  return (
    <div>
      <h1>Countries</h1>
      <Filter
        newSearch={newSearch}
        handleNewSearch={handleNewSearch}
      />
      {showCountries()}
    </div>
  )
}
