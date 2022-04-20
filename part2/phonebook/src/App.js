import { number } from 'prop-types'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '9865123'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    console.log(newName)
    const temp = {
      name: newName,
      number: newNumber
    }
    for(let x of persons){
      if(x.name === newName){
        console.log("here2")
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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person, i)=><li key={i}>{`${person.name} ${person.number}`}</li>)}
    </ul>
    </div>
  )
}

export default App