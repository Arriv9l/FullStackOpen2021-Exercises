import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h2>{text}</h2>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Result = ({ text, num }) => (
  <div>{text} {num}</div>
)

const Compute = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1)) / all
  const positive = good / all * 100
  return (
    <>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1)
  const setToNeutral = () => setNeutral(neutral + 1)
  const setToBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text={'give feedback'} />
      <Button handleClick={setToGood} text={'good'} />
      <Button handleClick={setToNeutral} text={'neutral'} />
      <Button handleClick={setToBad} text={'bad'} />
      <Header text={'statistics'} />
      <Result text={'good'} num={good} />
      <Result text={'neutral'} num={neutral} />
      <Result text={'bad'} num={bad} />
      <Compute good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)