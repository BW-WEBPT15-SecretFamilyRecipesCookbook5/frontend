import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {handleChange, login} from '../utils/actions';
import TextField from '@material-ui/core/TextField';
import { StyledButton } from '../utils/styles';
import { Link } from 'react-router-dom';

const Login = ({login, loginCredentials, handleChange, loggedIn, history}) => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // const handleUsenameChange = e => {
    //     setUsername(e.target.value)
    // }

    // const handlePasswordChange = e => {
    //     setPassword(e.target.value)
    // }

    useEffect(() => {
        if(loggedIn) {
            history.push('/dashboard')
        }
    }, [loggedIn])

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
                        value={loginCredentials.username}
                        onChange={e=>handleChange(e, 'loginCredentials')}
                    />
                    <TextField
                        required
                        type='password'
                        label='password'
                        name='password'
                        value={loginCredentials.password}
                        onChange={e=>handleChange(e, 'loginCredentials')}
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
        loginCredentials: state.loginCredentials
    }
}

export default connect(
    mapStateToProps,
    { handleChange, login }
)(Login);