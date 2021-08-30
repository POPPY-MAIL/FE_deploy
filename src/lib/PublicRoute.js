import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import isLogin from "../lib/isLogin";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
