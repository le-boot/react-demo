import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            strikeThrough:false
        }
    }
  
    onSubmit = (event) => {
      event.preventDefault()
      this.setState({ strikeThrough: true })
    }
  
    render() {
        if (this.state.strikeThrough) {
            return (
                <React.Fragment>
                    <li onClick={this.onSubmit}><s>{this.props.value}</s></li>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                   <li onClick={this.onSubmit}>{this.props.value}</li>
                </React.Fragment>
              );
        }
    }
  }
  
  export default ToDoItem;