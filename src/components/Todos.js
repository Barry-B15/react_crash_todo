import React, { Component } from 'react';
import TodoItem from "./TodoItem"; // import TodoItem
import PropTypes from "prop-types"; // import prop-types

// video format
class Todos extends Component {
    // def mark complete
    // markComplete = () => {
    //     console.log('Hello!')
    // }
    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo) => ( <
            TodoItem key = { todo.id }
            todo = { todo }
            markComplete = { this.props.markComplete }
            delTodo = { this.props.delTodo }
            / >
        ));
    }
}

// define prop-types just below the class
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


export default Todos;