import React from 'react';
import Amazon from './Amazon';
import Card from "./Card";
import Netflix from './Netflix';
import Sdata from "./Sdata";
const favseries = 'Netflix';

//const Favs = () => {


// if(favseries === 'netflix'){
//  return <Netflix/>;
// }else{
//  return<Amazon/>;
// }
// };
const App = () => (
  <>
  <h1 className="heading_style">List of Top Five Netflix in 2020</h1>
  {/* <Favs/> */}
  {favseries === 'Netflix' ? <Netflix/> : <Amazon/>};
  </>
);
export default App;




