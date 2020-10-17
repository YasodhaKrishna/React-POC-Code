import React, { Component, Suspense, lazy } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import compose from 'recompose/compose';
import { createHashHistory } from 'history';

import App from './module/main/App';
import CardDetailView from './module/main/CardDetail';

const history = createHashHistory({
    basename: process.env.PUBLIC_URL
});
class Main extends Component {
    /**
     * ...
     * @ReactRender
     */
    render() {
        
        const cmp = (
            <>
                
                <Router history={history}>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/products" />}
                            />
                            <Route path="/products" component={App} />
                            <Route path="/product-details" component={CardDetailView} />
                        </Switch>
                </Router>
            </>
        );

        return cmp;
    }
}
export default compose(
)(Main);
