import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";
import { getUser } from "../actions/userAction";
// pages
import Error from "../pages/error";
import Login from "../pages/login";

export default function App() {
  const dispatch = useDispatch();
  var { isAuthenticated } = useSelector((state) => state.user);
  React.useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app" />} />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
