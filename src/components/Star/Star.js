
import React, { Component } from 'react';

class Star extends Component {
    constructor() {
        super();
        this.state = { name: '', role: '' };
    }

    handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({ name: event.target.value });
    }

    handleRoleChange = (event) => {
        console.log(event.target.value);
        this.setState({ role: event.target.value });
    }

    handleClick = (event) => {
    event.preventDefault();
       let name = this.state.name; 
       console.log(name); 
    }


    render() {
        return (
            <div>
                <form>
                    <label>Name: </label> <input onChange={this.handleNameChange} />
                    <label>Role: </label><input onChange={this.handleRoleChange} />
                    <button onClick={this.handleClick}>Submit</button>
                </form>
                <br/><br/>
                {this.state.name} is famous for {this.state.role}.
            </div>

        );
    }
}


export default Star; 