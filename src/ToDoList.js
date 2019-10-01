import React from 'react'

const ToDoList = (props) => (
<div>
    <ul>
        {props.value.map(item => (
            <li>{item}</li>
        ))}
    </ul>
</div>
)

export default ToDoList