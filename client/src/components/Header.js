// REACT
import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='left-container'>
                        <Link className='logo-box' to='#'>
                            <img className='logo' src='https://static.hellofresh.com/images/hellofresh-logo.svg?v=3' alt='HelloFresh' />

                        </Link>
                        <span id='main-navigation'>
                            <Link className='nav-link' to='#'>Our Plans</Link>
                            <Link className='nav-link' to='#'>How It Works</Link>
                            <Link className='nav-link' to='#'>Our Menus</Link>
                            <Link className='nav-link' to='#'>Wine</Link>
                            <Link className='nav-link' to='#'>Kitchenware</Link>
                            <Link className='nav-link' to='#'>Blog</Link>
                            <Link className='nav-link' to='#'>Gifts</Link>
                        </span>
                    </div>

                    <div className='right-container'>
                        <div class="fela-107ja4p">

                            <div class="fela-15drwir">
                                <a href="" target="_self">
                                    <span className="fela-zz4weo">
                                        <span data-translation-id="senf-navigation.login">
                                            Login
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;
