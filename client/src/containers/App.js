// REACT
import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header'
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
