import React from 'react'

const User = ({data}) => {
    console.log(data.name);
  return (
    <div>
      <h1>user components</h1>
      <h3>{data.name}</h3>
      <h4>{data.age}</h4>
    </div>
  )
}

export default User
