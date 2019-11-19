import React, { Component } from 'react';

class FormComponent extends Component {
  constructor () {
    this.state = {
      email: ''
    }
  }
  
  changeHandler = event => {
    this.setState({
      email: event.target.value,
    });
  }

  render () {
    return (
      <form>
          <input type="email" 
                 name="email"   
                 value={this.state.email} 
                 onChange={this.changeHandler} 
          />
          <input type="text" 
                 name="name"   
                 value={this.state.name} 
                 onChange={this.changeHandler} 
          />
          <input type="text" 
                 name="location"   
                 value={this.state.location} 
                 onChange={this.changeHandler} 
          />
          <input type="text" 
                 name="message"   
                 value={this.state.message} 
                 onChange={this.changeHandler} 
          />
      </form>
    );        
  }
}

export default FormComponent;