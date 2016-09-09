import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '~/reducers';
import App from '~/components/App';
import rootSaga from '~/sagas';

const sagaMiddleWare = createSagaMiddleWare();

let store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        sagaMiddleWare
    ),
    window.devToolsExtension ? window.devToolsExtension() : func => func
));

sagaMiddleWare.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
