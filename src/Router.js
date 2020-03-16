import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import ImageView from './components/ImageView';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/image/:id" component={ImageView} />
        </Switch>
    )
}

export default Router;
