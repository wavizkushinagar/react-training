
import './App.css';
import Login from './component/Login';
import SingUp from './component/SingUp';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
  <Switch>
   <Route exact path="/" component={Login} />
   <Route path="/sing" component={SingUp} />
 </Switch>
      
    </div>
  );
}

export default App;
