// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { handleChange, login } from '../utils/actions';
// // import TextField from '@material-ui/core/TextField';
// import { StyledButton } from '../utils/styles';
// const Login = ({ login, loginCredentials, handleChange }) => {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const handleUsenameChange = e => {
//         setUsername(e.target.value)
//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value)
//     }
//     return (
//         <div className='login-container'>
//             <h2>Login</h2>
//             <form onSubmit={(e) => {
//                 login(e, loginCredentials)
//             }}
//             >
//                 <div className='login-form'>
//                     <input
//                         type='text'
//                         label='Username'
//                         name='username'
//                         value={username}
//                         onChange={handleUsenameChange}
//                     />
//                     <input
//                         type='password'
//                         label='password'
//                         name='password'
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                 </div>
//                 <button className='login-button' type='submit' varient='outlined'>Sign In</button>
//             </form>
//         </div>
//     )
// }
// const mapStateToProps = state => {
//     return {
//         // loginCredentials: state.loginCredentials
//     }
// }
// export default connect(mapStateToProps, { handleChange, login })(Login);

import React, {useState} from 'react';
import { connect } from 'react-redux';
import {handleChange, login} from '../utils/actions';
import TextField from '@material-ui/core/TextField';
import { StyledButton } from '../utils/styles';
import { Link } from 'react-router-dom';

const Login = ({login, loginCredentials, handleChange}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsenameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={(e)=>{
                login(e, loginCredentials)
                }}
            >
                <div className='login-form'>
                    <TextField
                        required
                        type='text'
                        label='Username'
                        name='username'
                        value={username}
                        onChange={handleUsenameChange}
                    />
                    <TextField
                        required
                        type='password'
                        label='password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className='login-buttons'>
                    <StyledButton className='login-button' type='submit' varient='outlined'>Sign In</StyledButton>
                    <Link to='/register'>Don't have an account? Create one!</Link>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // loginCredentials: state.loginCredentials
    }
}

export default connect(mapStateToProps,{handleChange, login})(Login);