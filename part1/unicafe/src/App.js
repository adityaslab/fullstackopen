import { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const pos = good * 100 / total
  if(total===0){
    return(<p>no feedback given</p>)
  }
  return(
    <div>
      <h3>statistics</h3>
      <StatisticalLine text='good' value={good} />
      <StatisticalLine text='neutral' value={neutral} />
      <StatisticalLine text='bad' value={bad} />
      <StatisticalLine text='all' value={total} />
      <StatisticalLine text='average' value={average} />
      <StatisticalLine text='positive' value={pos} />
    </div>
  )
}

const StatisticalLine = ({text, value}) => {
  return(
    <p>{text} {value}</p>
  )
}
const Button = ({text,onClick}) => {
  return(<button onClick={onClick}>{text}</button>)
}

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
      <Button onClick={incgood} text='good' />
      <Button onClick={incneutral} text='neutral' />
      <Button onClick={incbad} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App