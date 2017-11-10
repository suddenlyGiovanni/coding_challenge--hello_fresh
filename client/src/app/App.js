// REACT
import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header'
class App extends Component {
    render() {
        return (
            <div>
                <Header />

                {this.props.children}
            </div>
        );
    }
}

export default App;
