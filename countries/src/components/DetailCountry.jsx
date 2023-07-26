import { useEffect } from "react"
import axios from "axios"

export default function DetailCountry({ country, languages, countryFlag, dataWeather, setDataWeather}) { 
  const city = country.capital
  const urlBase = import.meta.env.VITE_URL_BASE_WEATHER
  const pass = import.meta.env.VITE_API_KEY
  const url = `${urlBase}${pass}&query=${city}`
  useEffect(()=> {
      setDataWeather('loading')
      axios
      .get(url)
      .then(response => {
        let responseWeather = response.data
        setDataWeather(responseWeather)
    })
  },[])

  return (
    <>
        <h3>{country.name.common}</h3>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h4>languages</h4>
        {languages.map( (lang, index) => <li key={index}>{lang[1]}</li> )}
        <img src={countryFlag} />
        <div>{dataWeather === 'loading' || dataWeather === '' 
          ? 
          '' 
          : 
          <div>
            <h4>Weather in {country.capital}</h4>
            <p><strong>temperature: </strong>{dataWeather.current.temperature}℃</p>
            <img src={`${dataWeather.current.weather_icons[0]}`}/>
            <p><strong>wind: {dataWeather.current.wind_speed} mph direction {dataWeather.current.wind} </strong></p>
          </div>}
        </div>
        
    </>
  )
}
