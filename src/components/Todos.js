import React, { Component } from 'react';

// video format
class Todos extends Component {
    render() {
        console.log(this.props.todos);
        return ( <
            div >
            <
            h1 > Todos < /h1> <
            /div>
        )
    }
}
// function Todos() { // original code format
//     return ( <
//         div >
//         <
//         h1 > Todos < /h1>   <
//         /div >
//     );
// }

export default Todos;