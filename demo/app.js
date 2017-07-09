/**
 * Created by colin on 2017/6/13.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Router, Link, Switch, BrowserRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';

import {Button} from '../src/ui/index';
import SideBarContainer from './containers/common/side-bar';
import PageContentContainer from './containers/common/page-content';
import PageHeaderContainer from './containers/common/page-header';
import HomeContainer from './containers/common/home';

import {
  UIBadgesContainer, UIButtonsContainer, UIDraggablePanelsContainer, UIHelpersContainer, UIIconsContainer,
  UINotificationsContainer, UIPanelsContainer, UIResizeablePanelsContainer, UITabsContainer, UITypographyContainer,
  UIVideoContainer
} from './containers/ui-elements';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
//
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {appReducers} from 'reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(appReducers);

const customHistory = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <div>
        <SideBarContainer/>
        <PageContentContainer>
          <PageHeaderContainer/>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/uis/typography" component={UITypographyContainer}/>
            <Route exact path="/uis/icons" component={UIIconsContainer}/>
            <Route exact path="/uis/buttons" component={UIButtonsContainer}/>
            <Route exact path="/uis/video" component={UIVideoContainer}/>
            <Route exact path="/uis/panels" component={UIPanelsContainer}/>
            <Route exact path="/uis/tabs" component={UITabsContainer}/>
            <Route exact path="/uis/notifications" component={UINotificationsContainer}/>
            <Route exact path="/uis/csshelpers" component={UIHelpersContainer}/>
            <Route exact path="/uis/badges" component={UIBadgesContainer}/>
          </Switch>
        </PageContentContainer>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);

