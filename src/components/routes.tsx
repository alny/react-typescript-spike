import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavContainer from "./Nav/NavContainer";
import { fakeAuth } from "src/utils/FakeAuth";
import NavLoggedIn from "./Nav/NavLoggedIn";
import Home from "./Nav/Home";

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export const Routes = () => (
  <BrowserRouter>
    <div>
      <NavContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/private" component={NavLoggedIn} />
      </Switch>
    </div>
  </BrowserRouter>
);
