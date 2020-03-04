import React, { useState } from 'react';
import { StyledButton } from '../utils/styles';
import TextField from '@material-ui/core/TextField';

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div className='login-container'>
            <h2>Register</h2>
            <form>
                <div className='register-form'>
                    <TextField
                        required
                        type='text'
                        label='First Name'
                        name='name'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <TextField 
                        required 
                        type='text'
                        label='Last Name'
                        name='lName'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <TextField      
                        required
                        type='text'
                        label='Username'
                        name='username'
                        value={username}
                        onChange={handlePasswordChange}
                    />
                    <TextField  
                        required
                        type='password'
                        label='Password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <TextField  
                        required
                        type='password'
                        label='Confirm Password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <StyledButton type='submit'>Sign Up</StyledButton>
            </form>
        </div>
    )
}

export default Register;