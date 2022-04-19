import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
  <button onClick={onClick}>{text}</button>
  )
}

const MostVoted = ({anecdotes, votes}) => {
  const mv = Math.max(...votes)
  const ind = votes.indexOf(mv)
  const annec = anecdotes[ind]
  if(mv === 0){
    return(<div>no votes given yet</div>)
  }
  return(
    <div>
      {annec}
      <br />has {mv} votes.
    </div>

  )
}

const App = () => {
  const randInt = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))

  const voteChange = () => {
    const cpy = [...votes]
    cpy[selected] += 1
    setVotes(cpy)
  }
  return (
    <div>
      <h3>Anectode of the day</h3>
      {anecdotes[selected]} 
      <br />
      <Button onClick={voteChange} text="vote" />
      <Button onClick={randInt} text="next anecdote" />
      <h3>Anectode with most votes</h3>
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
