import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Person from './components/Person'
import Filter from './components/Filter'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const address='http://localhost:3001/persons'
  useEffect(() => {
    axios.get(address)
    .then( response=>{
      setPersons(response.data)
    })
  }, [])
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
