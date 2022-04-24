import phonebookService from "../services/phonebook"
const Person = ({person, setPersons, handleDelete}) => {

  return(
    <li id={person.id}>{`${person.name} ${person.number}`}<button onClick={()=>handleDelete(person)}>delete</button></li>
  )
}
export default Person