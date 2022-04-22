import { useState, useEffect } from "react";
import axios from "axios";
import Content from "./components/Content";

function App() {
  const [input,changeInput] = useState('')
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState([])

  const url = 'https://restcountries.com/v3.1/all'
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setCountries(response.data)
    })
  },[])
  const handleInputChange = (event) => {
    changeInput(event.target.value)
    const rx = new RegExp(input,'i')
    const searchResult = () => countries.filter(country => country.name.common.match(rx))
    setSearch(searchResult)
  }
  return (
    <div>
      find countries
      <input value={input} onChange={handleInputChange} />
      <Content search={search} setSearch={setSearch} />
    </div>
  )
}

export default App;