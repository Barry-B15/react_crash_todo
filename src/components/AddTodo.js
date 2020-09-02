import React, { Component } from 'react'

export class AddTodo extends Component {
    // add the form as a piece of state, set the title to null by default
    state = {
        title: ''
    }

    // define onSubmit
    onSubmit = (e) => {
            e.preventDefault();
            this.props.addTodo(this.state.title);
            this.setState({ title: '' });
        } // then go add it to App.js

    // define a component level onChange
    //onChange = (e) => this.setState({ title: e.target.value }); // target the value/input of the form

    // for multiple fields we just replace the title part with a [e.target.name] as long as name corresponds tp the field and it will work
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        return ( <
            form onSubmit = { this.onSubmit }
            style = {
                { display: 'flex' }
            } >
            <
            input type = "text"
            name = "title"
            style = {
                { flex: '10', padding: '5px' }
            }
            placeholder = "Add Todo ..."
            value = { this.state.title }
            onChange = { this.onChange }
            / > <
            input type = "submit"
            value = "Submit"
            className = "btn"
            style = {
                { flex: '1' }
            }
            />

            <
            /form>
        )
    }
}

export default AddTodo