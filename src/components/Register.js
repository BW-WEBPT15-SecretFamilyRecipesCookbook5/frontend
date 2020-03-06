import React, { useEffect } from 'react';
import { StyledButton } from '../utils/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { handleChange, register } from '../utils/actions'

const Register = ({ register, registerCredentials, handleChange, loggedIn, token, history}) => {

    useEffect(()=> {
        if(loggedIn){
          localStorage.setItem('token', token);
          history.push('/Dashboard')
        }
      } ,[loggedIn])

    return (
        <div className='login-container'>
            <h2>Register</h2>
            <form onSubmit={(e)=>{
          register(e, registerCredentials)
        }}>
                <div className='register-form'>
                    <TextField      
                        required
                        type='text'
                        label='Username'
                        name='username'
                        value={registerCredentials.username}
                        onChange={e=>handleChange(e, 'registerCredentials')}
                    />
                    <TextField  
                        required
                        type='password'
                        label='Password'
                        name='password'
                        value={registerCredentials.password}
                        onChange={e=>handleChange(e, 'registerCredentials')}
                    />
                </div>
                <StyledButton type='submit'>Sign Up</StyledButton>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        registerCredentials: state.registerCredentials
    }
}

export default connect(
    mapStateToProps,
    { handleChange, register }
)(Register);