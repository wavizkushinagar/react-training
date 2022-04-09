
import './App.css';
import Login from './component/Login';
import SingUp from './component/SingUp';
import {Route,Routes} from 'react-router-dom';
//import ProtectedRoute from "./component/ProtectedRoute";
//import Dashboard from './dashboard/Dashboard'
function App() {
  return (
    <div>
  <Routes>
   <Route exact path="/" element={<Login/>} />
   <Route exact path="/sing" element ={<SingUp/>} />
   {/* <ProtectedRoute path="/dashboard" element= {<Dashboard />} auth={false}/> */}
 </Routes>
      
    </div>
  );
}

export default App;
