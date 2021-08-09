import React, { useState } from 'react';




const App = () => {
  const state = useState();
// console.log(state);
const [Count, setCount] = useState(0);


const IncNum = () => {
  setCount(Count+1);
  // console.log('CLicked' + Count++);
  
}
 return(
   <>
   <div className="center">
    <h1> {Count} </h1>
    <button onClick={IncNum}>Click me</button>
    </div>
   </>
 );
 };
export default App;




