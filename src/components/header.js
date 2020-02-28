import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='navbar'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}

export default Header;