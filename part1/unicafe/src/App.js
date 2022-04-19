import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incgood = () => {
    setGood(good+1)
  }

  const incneutral = () => {
    setNeutral(neutral+1)
  }

  const incbad = () => {
    setBad(bad+1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={incgood}>good</button>
      <button onClick={incneutral}>neutral</button>
      <button onClick={incbad}>bad</button>
      <h3>statistics</h3>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App