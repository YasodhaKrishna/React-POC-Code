/* eslint import/no-unresolved:0 global-require:0 */
/* eslint no-undef:0 */

import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Store } from './Store';

import Main from './Main';

const rootElement = document.getElementById('root');

if (rootElement) {
    render(
        <Provider store={Store}>
            <Main />
        </Provider>,
        rootElement
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
