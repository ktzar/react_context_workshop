import React, { useReducer } from 'react'

function todosReducer(state, action) {
    switch (action.type) {
        case 'addTodo':
            return state.concat(Math.random().toString(26).substr(2))
        default:
            throw new Error('Unknown action')

    }

}

export const ReducerState = () => {
    const [ state, dispatch ] = useReducer(todosReducer, [])

    return (<div>
        <button onClick={() => { dispatch({type: 'addTodo'}) }}>Add todo</button>
        <ul>
        {state.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
    </div>)
}