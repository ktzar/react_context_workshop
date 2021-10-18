import React, { useState } from 'react'

export const HooksState = () => {
    const [ todos, setTodos ] = useState([])

    const addTodo = () => {
        setTodos(todos.concat(Math.random().toString(26).substr(2)))
    }

    return (<div>
        <button onClick={() => { addTodo() }}>Add todo</button>
        <ul>
            {todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
    </div>)
}