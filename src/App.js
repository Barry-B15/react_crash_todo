//import React from 'react';
import React, { Component } from 'react'; //this is what the video has, mine is the above
import Todos from "./components/Todos";
import './App.css';


// the video:
class App extends Component {
    state = { // create the state
        todos: [{
                id: 1,
                title: 'Take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'Dinner with family',
                completed: true
            },
            {
                id: 3,
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
    render() {
        console.log(this.state.todos); // access the state
        return ( < div className = "App" >
            <
            Todos todos = { this.state.todos }
            markComplete = { this.markComplete }
            delTodo = { this.delTodo }
            />   < /
            div >
        );
    }
}
//}

// My auto generated looks like this
/* function App() {
    return ( <
        div className = "App" >
        <
        Todos / >
        <
        /
        div >
    );
} */



export default App;