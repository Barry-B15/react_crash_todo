//import React from 'react';
import React, { Component } from 'react'; //this is what the video has, mine is the above
import { BrowserRouter as Router, Route } from 'react-router-dom'; // import the router and scroll down, wrap content of return in <Router>
import Header from "./components/layout/Header"; // import the header here
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import './App.css';
//import uuid from 'uuid';
import { v4 as uuid } from "uuid";


// the video:
class App extends Component {
    state = { // create the state
        todos: [{
                id: uuid(),
                title: 'Take out the trash',
                completed: false
            },
            {
                id: uuid(),
                title: 'Dinner with family',
                completed: true
            },
            {
                id: uuid(),
                title: 'Meeting with boss',
                completed: false
            },
        ]
    }

    // define mark complete and toggle complete
    markComplete = (id) => {
        //console.log(id)
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    //Delete Todo
    delTodo = (id) => {
        //console.log(id)
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // Add Todo (Submit)
    addTodo = (title) => {
        //console.log(title)
        // def a new todo
        const newTodo = {
            id: uuid(),
            title, //since title: title are same word
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }
    render() {
        //console.log(this.state.todos); // access the state
        return ( <
            Router >
            <
            div className = "App" >
            <
            div className = "container" >
            <
            Header / >

            <
            Route exact path = "/"
            render = {
                props => ( <
                    React.Fragment >
                    <
                    AddTodo addTodo = { this.addTodo }
                    / >   <
                    Todos todos = { this.state.todos }
                    markComplete = { this.markComplete }
                    delTodo = { this.delTodo }
                    / >   < /
                    React.Fragment >
                )
            }
            />

            <
            Route path = "/about"
            component = { About }
            />

            <
            /div>  < /
            div > <
            /Router >
        );
    }
}
//}



export default App;