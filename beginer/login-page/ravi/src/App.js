
import './App.css';
import Login from './component/Login';
import SingUp from './component/SingUp';
import {Route,Switch} from 'react-router-dom';
import ProtectedRoute from "./component/ProtectedRoute";
import Dashboard from './dashboard/Dashboard'
function App() {
  return (
    <div>
  
  <Switch>
   <Route exact path="/" component={Login} />
   <Route exact path="/sing" component ={SingUp} />
   
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

  {/* <ProtectedRoute path="/dashboard" component= {Dashboard } auth={false}/> */}

 </Switch>
 
      
    </div>
  );
}

export default App;
