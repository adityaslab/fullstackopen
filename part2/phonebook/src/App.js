import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    console.log(newName)
    const temp = {
      name:newName
    }
    setPersons(persons.concat(temp))
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleChange}/>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    <ul>
      {persons.map((person, i)=><li key={i}>{person.name}</li>)}
    </ul>
    </div>
  )
}

export default App
