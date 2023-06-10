import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feeling = (state = [], action) => {
    if (action.type === 'FEELINGS'){
        return action.payload
    }
    return state;
};

const understanding = (state = [], action) => {
    if (action.type === 'UNDERSTANDING'){
        return action.payload
    }
    return state;
};

const support = (state = [], action) => {
    if (action.type === 'SUPPORT'){
        return action.payload
    }
    return state;
};

const comments = (state = [], action) => {
    if (action.type === 'COMMENTS'){
        return action.payload
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
