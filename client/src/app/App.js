// REACT
import React, { Component } from 'react';
// import './App.css';
import '../styles/grid-layout.css';

import Header from '../header/Header'
class App extends Component {
    render() {
        return (
            <div style={{'marginTop' : 80}}>
                <Header pathname={this.props.location.pathname}/>
                <div className='container'>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default App;
