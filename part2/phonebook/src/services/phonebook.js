import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addEntry = (entry) => {
    const request = axios.post(baseURL, entry)
    return request.then(response => response.data)
}

const deleteEntry = (i) => {
    const request = axios.delete(`${baseURL}/${i}`)
    return request.then(console.log('delete successful'))
}

export default{
    getAll,
    addEntry,
    deleteEntry
}