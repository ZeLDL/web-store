import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/error-boundry';
import MyStoreServices from './services/serv';
import { StoreServicesProvider } from './components/store-services-context';

import store from './store';

const myStoreServices = new MyStoreServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServicesProvider value={myStoreServices}>
                <Router>
                    <App />
                </Router>
            </StoreServicesProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);