import {  Route, } from 'react-router-dom';

import './App.css';
import Container from './Container/Container';

function App() {
  return (
    <div>

    
    <Route  exact path='/' component={Container} />
    
    </div>
  );
}

export default App;
