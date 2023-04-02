import React from 'react'

const person={
    name:'Gregory Y. Zara',
    theme:{
        backgroundColor:"black",
        color:'white'
    }
}

function TodoList() {
  return (
    <div style={person.theme}>
        <h1>{person.name} </h1>

        <img
        className='avatar'
        src='https://i.imgur.com/7vQD0fPs.jpg'
        alt={person.name}
        />

        <ul>
            <li> Improve the videophone</li>
            <li> Prepare aeronautics lectures </li>
            <li>Work on the alcohol-fuelled engine </li>
        </ul>
      
    </div>
  )
}

export default TodoList
