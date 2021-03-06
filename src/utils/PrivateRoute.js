import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, props }) => {
    return (
        <Route
            {...props}
            render={() => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login'/>;
                }
            }}
        />
    );
};

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

export default connect(mapStateToProps,{}(PrivateRoute));