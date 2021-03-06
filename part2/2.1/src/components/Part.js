import React from 'react'

const Part = ({ part }) => {
  const { name, exercises } = part
  return (
    <li>{name} {exercises}</li>
  )
}

export default Part