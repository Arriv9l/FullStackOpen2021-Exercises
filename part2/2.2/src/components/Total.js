import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.exercises;
    }, 0)

  return (
    <div>total of {total} exercises</div>
  )
}

export default Total