import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import store from './app/store';
import { requestAuthAction } from './app/auth/actions';
import { LoginPageConnected } from './pages/loginPage';
import { MyTeamPageConnected } from './pages/myTeamPage';
import { LoadingPage } from './pages/loadingPage';
import { isFetchedSelector, isLoadingSelector } from './app/auth/selectors';
import { MyGamePageConnected } from './pages/myGamePage';

// eslint-disable-next-line no-unused-vars,react/prop-types
const AppAuth = ({
  isLoading, isFetched, requestAuth,
}) => {
  const history = useHistory();

  useEffect(() => {
    requestAuth(history);
  }, [history.location.pathname]);

  return !isLoading && isFetched ? (
    <Switch>
      <Route path="/login">
        <LoginPageConnected history={history} />
      </Route>
      <Route path="/my-team">
        <MyTeamPageConnected history={history} />
      </Route>
      <Route path="/my-game">
        <MyGamePageConnected history={history} />
      </Route>
      <Route path="*">
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      </Route>
    </Switch>
  ) : <LoadingPage />;
};

const ConnectedAppAuth = connect((state) => ({
  isLoading: isLoadingSelector(state),
  isFetched: isFetchedSelector(state),
}), {
  requestAuth: requestAuthAction,
})(AppAuth);

const App = () => (
  <Provider store={store}>
    <Router>
      <ConnectedAppAuth />
    </Router>
  </Provider>
);

export default App;
