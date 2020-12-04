import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stats = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good+bad+neutral
  const average = (good+bad) / total
  const pos = good/total * 100

  if (total > 0) {
    return (
      <div>
        <table>
        <Stat text="good" value={good} />
        <Stat text="neutral" value={neutral} />
        <Stat text="bad" value={bad} />
        <Stat text="total" value={total} />
        <Stat text="average" value={average} />
        <Stat text="positive" value={pos} mark="%" />
        </table>
      </div>
    )
  }
  return (
    <div>
      <p>
        no stats available
      </p>
    </div>
  )
}

const Stat = (props) => {
  const text=props.text
  const value=props.value
  const mark=props.mark

  return (
    <tbody>
      <tr>
        <td>{text} {value} {mark} </td>
      </tr>
    </tbody>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />      

      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)