/**
 * Created by colin on 2017/6/13.
 */

import 'assets/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import HomeContainer from 'containers/home';
import TopContainer from 'containers/top';
import NoMatchContainer from 'containers/nomatch';
import TemplateContainer1 from 'containers/template1';
import TemplateContainer2 from 'containers/template2';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { appReducers } from 'reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={HomeContainer}/>
                    <Route path="/tp1" component={TemplateContainer1}/>
                    <Route path="/tp2" component={TemplateContainer2}/>
                    <Route component={NoMatchContainer}/>
                </Switch>
                <TopContainer />
            </div>
        </HashRouter>
    </Provider>
,
    document.getElementById('app')
);

