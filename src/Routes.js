import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Signup from './pages/signup';
import NotFound from './pages/not-found';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="*" component={NotFound} />

                </Switch>
            </BrowserRouter>
        );
    }
}
