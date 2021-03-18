import React from 'react'

const LoginInfo = ({ username, handleLogout }) => (
  <div>
    {username} logged in
    <button onClick={handleLogout}>logout</button>
  </div>
)

export default LoginInfo