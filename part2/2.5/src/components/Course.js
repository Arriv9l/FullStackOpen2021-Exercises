import React from 'react'

const Header = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

const Part = ({ part }) => {
  const { name, exercises } = part
  return (
    <li>{name} {exercises}</li>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.exercises
    , 0
  )

  return (
    <div>total of {total} exercises</div>
  )
}

const Content = ({ parts }) => (
  <div>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
    <Total parts={parts} />
  </div>
)

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(({ name, id, parts }) =>
        <div key={id}>
          <Header text={name} />
          <Content parts={parts} />
        </div>
      )}
    </div>
  )
}

export default Course