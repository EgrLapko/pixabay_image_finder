import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
