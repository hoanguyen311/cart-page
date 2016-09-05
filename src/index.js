import React from 'react';
import { render } from 'react-dom';
import App from '~/components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '~/reducers';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : func => func
));

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
