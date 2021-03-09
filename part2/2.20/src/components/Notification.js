import React from 'react'

const Notification = ({ message }) => {
  const { content, type } = message
  if (!content)
    return null

  return (
    <div className={type}>{content}</div>
  )
}

export default Notification