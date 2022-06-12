import React from 'react'

function TodoList(props) {
  return (
    <div>
        <ul className='task'>
            <li className='task-heading'>{props.list}</li>
            <button className='btn-dlt' onClick={() =>{props.onSelect(props.id)}}>X</button>
        </ul>
    </div>
  )
}

export default TodoList