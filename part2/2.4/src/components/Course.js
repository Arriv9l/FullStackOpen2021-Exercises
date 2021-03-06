import React from 'react'
import Header from './Header'
import Content from './Content'

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