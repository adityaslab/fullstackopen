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
      <table>
        <tbody>
        <StatisticalLine text='good' value={good} />
        <StatisticalLine text='neutral' value={neutral} />
        <StatisticalLine text='bad' value={bad} />
        <StatisticalLine text='all' value={total} />
        <StatisticalLine text='average' value={average} />
        <StatisticalLine text='positive' value={pos} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticalLine = ({text, value}) => {
  return(
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}
const Button = ({text,onClick}) => {
  return(<button onClick={onClick}>{text}</button>)
}

const App = () => {
  // save clicks of each button to its own state
  const[clicks, setClicks] = useState(
    {good:0, neutral:0, bad:0}
  )

  const incgood = () => {
    setClicks({...clicks, good: clicks.good+1})
  }

  const incneutral = () => {
    setClicks({...clicks, neutral: clicks.neutral+1})
  }

  const incbad = () => {
    setClicks({...clicks, bad: clicks.bad+1})
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incgood} text='good' />
      <Button onClick={incneutral} text='neutral' />
      <Button onClick={incbad} text='bad' />
      <Statistics good={clicks.good} bad={clicks.bad} neutral={clicks.neutral} />
    </div>
  )
}

export default App