import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import MyStoreServices from './services';
import {StoreServicesProvider} from './components/store-services-context';

import store from './store';
import ErrorBonudry from './components/error-boundry';

const myStoreServices = new MyStoreServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBonudry>
            <StoreServicesProvider value={myStoreServices}>
                <Router>
                    <App />
                </Router>
            </StoreServicesProvider>
        </ErrorBonudry>
    </Provider>
);