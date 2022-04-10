import "./App.css";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

     {/*  <ProtectedRoute path="/dashboard" component={Dashboard} auth={true}/> */}

        <ProtectedRoute
                        path="/dashboard"
                        redirectRoute="/"
                        guardFunctionArgs={{'one':'one'}}
                        guardFunction={(args) => {
                            console.log(args)
                            const token = localStorage.getItem('token');
                            return token && token.length > 0;
                        }}
                        component={Dashboard}
                        exact
                    />     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
