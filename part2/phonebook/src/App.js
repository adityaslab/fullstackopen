import { useState } from 'react'
import Form from './components/Form'
import Person from './components/Person'
import Filter from './components/Filter'
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
      number: newNumber,
      id: persons.length + 1
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
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <h3>add a new</h3>
      <Form onSubmit={handleAdd} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
    <ul>
      {persons.map((person)=><Person key={person.id} person={person} />)}
    </ul>
    </div>
  )
}

export default App
