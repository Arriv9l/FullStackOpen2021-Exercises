import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h2>{text}</h2>
)

const Display = ({ index, points }) => (
  <div>
      <div>{anecdotes[index]}</div>
      <div>has {points[index]} votes</div>
  </div>
)

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const setToSelected = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const setToPoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const maxIndex = points.indexOf(Math.max(...points))

  return (
    <>
      <Header text='Anecdote of the day'/>
      <Display index={selected} points={points} />
      <button onClick={setToPoints}>vote</button>
      <button onClick={setToSelected}>next anecdote</button>
      <Header text='Anecdote with most votes'/>
      <Display index={maxIndex} points={points} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)