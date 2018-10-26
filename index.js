import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';




export default class ToDo extends React.Component{
    
    render(){
        return(
        <div>
            <ul>
                <li>{this.props.description} -- {this.props.deadLineDate}</li>
            </ul>
        </div>
)
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
