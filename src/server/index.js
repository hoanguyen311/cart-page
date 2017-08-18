import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '~/reducers';
import App from '~/containers/App';
import { loadData } from '~/api';
import { receiveData } from '~/actions/app';

import Page from './html';
const app = express();

app.use(express.static(path.resolve('dist/static')));

app.get('/', (req, res) => {
    loadData()
        .then(({ data }) => receiveData(data))
        .then((action) => appReducer(undefined, action))
        .then(preloadedState => {
            const store = createStore(appReducer, preloadedState);

            const content = renderToString(
                <Provider store={store}>
                    <App />
                </Provider>
            );
            res.send(renderPage(content, preloadedState));
        });

});

const renderPage = (content, state) => {
    return renderToString(
        <Page
            content={content}
            state={state}
            scripts={['vendor.js', 'app.js']}
            styles={['app.css']}
        />
    );
};

app.listen(3000);
