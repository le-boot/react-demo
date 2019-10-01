import React from 'react'

const ToDoForm = (props) => (
        <form onSubmit={props.onSubmit}>
          <input name="task" type = "text"/>
          <button type="submit">Hit it</button>
        </form>
)

export default ToDoForm