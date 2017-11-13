// REACT
import React, { Component } from 'react';
import Auth from '../utils/Auth';
// import './App.css';
import '../styles/grid-layout.css';

import Header from '../header/Header'


export default class App extends Component {
    render() {
        return (
            <div style={{'marginTop' : 80}}>
                <Header
                    pathname={this.props.location.pathname}
                    loggedIn={Auth.isUserAuthenticated()}/>

                <div className='container'>
                    {this.props.children}
                </div>

            </div>
        );
    }
}
