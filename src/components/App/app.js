import React from 'react';
import './app.css';
import {wrapStoreServices} from '../hoc';

const App = ({MyStoreServices}) => {
    console.log(MyStoreServices.getBooks());
    return <div> App </div>;
};

export default wrapStoreServices()(App);