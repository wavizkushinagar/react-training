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



{/* import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({auth, component:Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props)=>{
        if(auth) return <Component {...rest} />;
        if(!auth) return(
          <Redirect to={{path:"/", state: {from:props.location}}}/>
        ) 
      }}
    />
  );
};
export default ProtectedRoute; */}