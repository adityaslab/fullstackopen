import { useState, useEffect } from 'react'
import Form from './components/Form'
import Person from './components/Person'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phonebookService.getAll()
    .then( response=>{
      setPersons(response)
    })
  }, [])
  const handleUpdate = (id,newnumber) => {
    const entryOld = persons.find(p => p.id === id)
    const updatedEntry = {...entryOld, number: newnumber}
    console.log(updatedEntry)
    phonebookService
    .updateEntry(updatedEntry,id)
    .then(response => {
      setPersons(persons.map(p => p.id ===id ? response : p))
    })
  }
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
        if(window.confirm(`${newName} already added in phonebook, replace old number with new one?`)){
          handleUpdate(x.id,newNumber)
        }
        return
      }
    }

    phonebookService.addEntry(temp)
    .then( response => {
      setPersons(persons.concat(response))
    })
  }

  const handleDelete = (person) => {
    const i = person.id
    const name = person.name
    if(window.confirm(`Delete ${name}?`)){
      setPersons(persons.filter(p => p.id !== i))
      phonebookService.deleteEntry(i)
    }
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
      {persons.map((person)=><Person key={person.id} person={person} setPersons={setPersons} handleDelete={handleDelete} />)}
    </ul>
    </div>
  )
}

export default App
