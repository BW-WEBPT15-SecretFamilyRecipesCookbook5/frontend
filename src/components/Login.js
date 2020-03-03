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
                        type='text'
                        label='Username'
                        name='username'
                        value={username}
                        onChange={handleUsenameChange}
                    />
                    <TextField
                        type='password'
                        label='password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <StyledButton className='login-button' type='submit' varient='outlined'>Sign In</StyledButton>
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