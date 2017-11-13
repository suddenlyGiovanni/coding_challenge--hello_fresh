// REACT
import React from 'react';
import { Link } from 'react-router';

import './Header.css';

const Header  = props => {
    // console.log( 'Header - props: ', props );
    const {loggedIn, pathname } = props;
    let url;
    let urlAction;

    if (!loggedIn && pathname === '/login') {
        url = '/signup';
        urlAction = 'Signup';
    } else if (!loggedIn && pathname === '/signup') {
        url = '/login';
        urlAction = 'Login';
    } else {
        url = '/logout';
        urlAction = 'Logout';
    }

    return (
        <div>
            <header id='header'>

                <div className='menu-container'>
                    <i className='material-icons'>menu</i>
                </div>

                <div className='logo-container'>
                    <Link className='logo-link' to='/'>
                        <img className='logo-img'
                            src='https://static.hellofresh.com/images/hellofresh-logo.svg?v=3'
                            alt='HelloFresh' />
                    </Link>
                </div>

                <div className='nav-container'>
                    <nav id='nav'>
                        <Link className='nav-link' to='#'>Our Plans</Link>
                        <Link className='nav-link' to='#'>How It Works</Link>
                        <Link className='nav-link' to='#'>Our Menus</Link>
                        <Link className='nav-link' to='#'>Wine</Link>
                        <Link className='nav-link' to='#'>Kitchenware</Link>
                        <Link className='nav-link' to='#'>Blog</Link>
                        <Link className='nav-link' to='#'>Gifts</Link>
                    </nav>
                </div>


                <div className='btn-container'>
                    <Link className='btn-link' to={url}>
                        {urlAction}
                    </Link>
                </div>

            </header>
        </div>
    );
};

export default Header;
