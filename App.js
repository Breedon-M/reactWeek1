import React, { Component } from 'react';
import './App.css';
import Todo from './index';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'green'
    }
  }
  
  
  render() {
    return (
      <div>
        <Todo 
          description='Get out of bed'
          deadLineDate='Wed Sep 13 2017'
          >
        </Todo>
        <Todo 
          description='Brush teeth'
          deadLineDate='Thu Sep 14 2017'
          >
        </Todo>
        <Todo 
          description='Eat breakfast'
          deadLineDate='Fri Sep 15 2017'
          >
        </Todo>

      </div>
    );
  }
}


export default App;