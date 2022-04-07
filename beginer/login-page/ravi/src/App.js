
import './App.css';
import Login from './component/Login';
import SingUp from './component/SingUp';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
  <Routes>
   <Route exact path="/" element={<Login/>} />
   <Route path="/sing" element ={<SingUp/>} />
 </Routes>
      
    </div>
  );
}

export default App;
