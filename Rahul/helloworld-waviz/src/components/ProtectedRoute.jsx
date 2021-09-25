import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component:Component, redirectRoute, guardFunction, guardFunctionArgs, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (guardFunction && guardFunction(guardFunctionArgs)) {
            return <Component {...props} />;
        } else {
          return <Redirect to={redirectRoute} />;
        }
      }}
    />
  );
};
export default ProtectedRoute;