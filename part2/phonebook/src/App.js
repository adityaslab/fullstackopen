import { number } from 'prop-types'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
{ name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    console.log(newName)
    const temp = {
      name: newName,
      number: newNumber
    }
    for(let x of persons){
      if(x.name === newName){
        console.log("here")
        window.alert(`${newName} already added in phonebook`)
        return
      }
    }
    setPersons(persons.concat(temp))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const rx = new RegExp(newFilter,'i')
    const filtered = () => persons.filter(persons => persons.name.match(rx))
    setPersons(filtered)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with
        <input
        value={newFilter}
        onChange={handleFilterChange}/>
      </div>
      <h3>add a new</h3>
      <form onSubmit={handleAdd}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number:
          <input 
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>  
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    <ul>
      {persons.map((person)=><li key={person.id}>{`${person.name} ${person.number}`}</li>)}
    </ul>
    </div>
  )
}

export default App
