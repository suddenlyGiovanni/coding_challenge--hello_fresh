// REACT
import React, { Component } from 'react';
import Auth from '../utils/Auth';

import './app.css';
import '../styles/grid-layout.css';

import Header from '../header/header'


export default class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <Header
                    pathname={this.props.location.pathname}
                    loggedIn={Auth.isUserAuthenticated()}/>

                <div>
                    {this.props.children}
                </div>
                <footer className='footer'></footer>
            </div>
        );
    }
}
