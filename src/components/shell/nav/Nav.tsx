/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { shell } from '../shell';

const Nav: React.FC<shell.NavProps> = (props) => {
    const { handleLogout, isLoggedIn } = props;

    /** Navbar links to display when logged out */
    const preLogin = (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
    
    /** Navbar links to display when logged in */
    const postLogin = (
        <div>
            <a href="#" onClick={handleLogout}>Logout</a>
        </div>
    )

    return (
        <div>
            <nav>
            {isLoggedIn ? postLogin : preLogin}
            </nav>
        </div>
    );
}

export default Nav;