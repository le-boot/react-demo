import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = (props) => (

<div>
    <ul>
        {props.value.map(item => (
            <ToDoItem value={item}/>
        ))}
    </ul>
</div>
)

export default ToDoList