import { GithubIssuesScreen } from 'components/GithubIssues/GithuIssuesScreen';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const [isLoggedIn, seIsLoggedIn] = useState(true);

  return (
    <Router>
      <div>
        <Switch>

            <PublicRoute
              path="/auth"
              component={AuthRouter}
              isAuthenticated={isLoggedIn}
            />

            <PrivateRoute
              isAuthenticated={isLoggedIn}
              exact
              path="/"
              component={GithubIssuesScreen}
            />

            <Redirect to="/auth/login" />

        </Switch>
      </div>
    </Router>
  )
}