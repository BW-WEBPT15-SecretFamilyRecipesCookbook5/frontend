import React, {useState} from 'react';
import { connect } from 'react-redux';
import {handleChange, login} from '../utils/actions';

const Login = ({login, loginCredentials, handleChange}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='login-container'>
            <h2>Sign In</h2>
            <form onSubmit={(e)=>{
                login(e, loginCredentials)
                }}
            >
                <input
                    type='text'
                    label='Username'
                    name='username'
                    value={username}
                    onChange={e => handleChange(e, 'loginCredentials')}
                />
                <input
                    type='password'
                    label='password'
                    name='password'
                    value={password}
                    onChange={e => handleChange(e, 'loginCredentials')}
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    // loginCredentials: state.loginCredentials
})

export default connect(mapStateToProps,{handleChange, login})(Login);