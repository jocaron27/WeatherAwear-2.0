import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from '../PropTypes';

const Nav: React.FC<PropTypes.NavProps> = (props) => {
    const { handleLogout, isLoggedIn } = props;

    const preLogin = (
        <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )

    const postLogin = (
        <div>
            {/* The navbar will show these links after you log in */}
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