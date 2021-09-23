import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Route, Switch, useHistory } from 'react-router-dom';
import Reagistration from "./components/Registration";
import Error from "./components/Error";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import forgot from "./components/Forgot";
import Forgot from "./components/Forgot";
import Otp from "./components/Otp";
import Reset from "./components/Reset";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashbord from "./components/Dashboard";





const App = () => {

    return (
        <>

            <div className="App">
                <Switch>
                      
                 <Route  exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/registration' component={Reagistration} />
                   <Route path="/dashboard"><ProtectedRoute component={Dashbord} /></Route>
                    <Route exact path='/forgot' component={Forgot} />
                    <Route exact path='/otp' component={Otp} />
                    <Route exact path='/reset' component={Reset} />                   
                    <Route component={Error} />
                </Switch>

            </div>
        </>
    )
}
export default App;