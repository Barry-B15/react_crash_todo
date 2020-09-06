import React, { Component } from 'react'
import PropTypes from "prop-types"; // import prop-types

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props)
    // }

    render() {
        const {
            id,
            title
        } = this.props.todo;

        return ( <
            div style = { this.getStyle() } >
            <
            p >
            <
            input type = "checkbox"
            onChange = {
                this.props.markComplete.bind(this, id)
            }
            / > { ' ' }   { title } <
            button onClick = { this.props.delTodo.bind(this, id) }
            style = { btnStyle } > X < /button> < /
            p > <
            /div >
        )
    }
}

// define prop-types just below the class
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

//define the style and call it in the div
/* const itemStyle = {
    backgroundColor: '#f4f4f4'
} */

export default TodoItem