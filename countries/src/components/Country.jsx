import DetailCountry from "./DetailCountry"

export default function Country({ countries, newSearch, setCountries, dataWeather, setDataWeather }) {
  const countriesFilter = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))

  const countFilterCountries = countriesFilter.length
  const showCountries = () => {
    if (newSearch === '' ){
      return ''
    }

    if (countFilterCountries === 1) {
      return (
        countriesFilter.map((country, index) => {
          const countryLanguages = country.languages
          let languages = Object.entries(countryLanguages)
          const countryFlag = country.flags.png
          return (
            <div key = {index}>
              <DetailCountry 
                country={country}
                languages={languages}
                countryFlag={countryFlag}
                dataWeather={dataWeather}
                setDataWeather={setDataWeather}
              />
            </div>
          )
        })
      )
    } else if( countFilterCountries > 10 ) {
      return 'Too many matches, specify another filter'
    } else if(countFilterCountries <= 10) {
      return countriesFilter.map((country, index) => {
        const countryLanguages = country.languages
        let languages = Object.entries(countryLanguages)
        const countryFlag = country.flags.png
        let expandview = false
        const handleExpandView = () => {
          console.log({expandview})
          expandview = !expandview
          const tempCountries = countriesFilter.filter( cf => cf.name.common === country.name.common)
          setCountries(tempCountries)
        }
        return (
          <div key={index}>
            <div>
              <li>{country.name.common}</li>
              <button onClick={handleExpandView}>{expandview ? 'hide' : 'show'}</button>
            </div>
            <div>
              {expandview ?
                <>
                  <DetailCountry 
                    country={country}
                    languages={languages}
                    countryFlag={countryFlag}
                  />
                </>
                :
                ''
              }
            </div>
          
          </div>
        )
      })
    }
  }

  return (
    <>
        {showCountries()}
    </>
  )
}
