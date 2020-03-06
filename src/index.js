import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './utils/reducers';
import thunk from 'redux-thunk';
// import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const store = createStore(rootReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

