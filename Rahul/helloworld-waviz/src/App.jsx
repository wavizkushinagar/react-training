import React, { useState } from "react";
import Login from "./components/Login";
import { Route, Switch } from 'react-router-dom';
import Reagistration from "./components/Registration";
import Error from "./components/Error";
import Home from "./components/Home";
import Forgot from "./components/Forgot";
import Otp from "./components/Otp";
import Reset from "./components/Reset";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";



const App = () => {

  
    
    return (
        <>

            <div className="App">
                <Switch>
                    <Route  exact path='/' component={Home} />
                    <Route exact path='/login' component={Login}/> 
                    {/* <PublicRoute restricted={true} component={Login} path="/login" exact /> */}
                    <Route exact path='/registration' component={Reagistration} />
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