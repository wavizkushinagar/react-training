import React from 'react';
import SlotM from './slotmach';



const App = () => {
return(
  <>
    <h1 className="heading_style"> 🎰 Wellcome to
     <span style={{ fontWeight:"bold"}}>Slot machine game </span> 🎰 </h1>
  <div className="slot_machine">
  <SlotM x='😃' y='😃'z='😃' />
  <hr/>
  <SlotM x='😃' y='😂'z='🙃' />
  <hr/>
  <SlotM x='🚓' y='🍌'z='👧' />
  <hr/>
  <SlotM x='😆' y='😆'z='😆' />
  <hr/>
  </div>
  </>
)



};




export default App;




