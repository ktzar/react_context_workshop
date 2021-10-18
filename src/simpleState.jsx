import React from 'react'

export class SimpleState extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    addTodo() {
        this.setState({
            todos: this.state.todos.concat(Math.random().toString(26).substr(2))
        })
    }

    render() {
        return (<div>
            <button onClick={() => { this.addTodo() }}>Add todo</button>
            <ul>
                {this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
        </div>)
    }
}