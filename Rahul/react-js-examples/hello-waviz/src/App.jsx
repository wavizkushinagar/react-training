import React, {useState} from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Route, Switch } from 'react-router-dom';
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
import Redirecting from "./components/Redirecting";





const App = () => {

    const token = localStorage.getItem('token')
  const [isAuthenticated, setIsAuthenticated] = useState(
    token && token.length > 0
  )

  const onClickLogout = (e) => {
    setIsAuthenticated(false)
    localStorage.clear()
  }
  const onClickAuthenticateButton = (e) => {
    localStorage.setItem('token', 'Bearer Valid_TOKEN')
    setIsAuthenticated(true)
  }

    return (
        <>

            <div className="App">
                <Switch>
                      
                 <Route  exact path='/' component={Home} />
                    {/* <Route exact path='/login' component={Login} /> */}
                    <Route exact path='/registration' component={Reagistration} />
                    <Route
            exact
            path='/login'
            render={(props) => (
              <React.Fragment>
                {isAuthenticated ? (
                  <Redirecting to='/dashboard' />
                ) : (
                  <Login
                    {...props}
                    onClickAuthenticateButton={onClickAuthenticateButton}
                  />
                )}
              </React.Fragment>
            )}
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