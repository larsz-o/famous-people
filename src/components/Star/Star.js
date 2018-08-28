
import React, { Component } from 'react';

class Star extends Component {
    constructor() {
        super();
        this.state = { 
            star: {
                name: '', 
                role: '' }
            }     
    };

    handleNameChange = (event) => {
        console.log(event.target.value);
        let role = this.state.star.role; 
        this.setState({star: {name: event.target.value, role}}); 
        // this.setState({ name: event.target.value });
    }

    handleRoleChange = (event) => {
        console.log(event.target.value);
        let name = this.state.star.name; 
        this.setState({star: {role: event.target.value, name}}); 
    }

    handleClick = (event) => {
    event.preventDefault();
       let name = this.state.star; 
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
                {this.state.star.name} is famous for {this.state.star.role}.
            </div>

        );
    }
}


export default Star; 