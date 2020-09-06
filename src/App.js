//import React from 'react';
import React, { Component } from 'react'; //this is what the video has, mine is the above
import { BrowserRouter as Router, Route } from 'react-router-dom'; // import the router and scroll down, wrap content of return in <Router>
import Header from "./components/layout/Header"; // import the header here
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

import './App.css';
//import uuid from 'uuid'; // this didn't work 
//import { v4 as uuid } from "uuid"; // this worked


// the video:
class App extends Component {
    state = { // create the state
        todos: []
    }

    // use a 2nd life-cycle componentDidMount()
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
            // https://jsonplaceholder.typicode.com/users/1/todos?_limit=10  // also works (from site, above from video) 

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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
        // https://jsonplaceholder.typicode.com/users/1/todos?_limit=10  // also works (from site, above from video) but didn't work for delete
    }

    // Add Todo (Submit)
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, // short for title: title,
            completed: false
        }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));

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