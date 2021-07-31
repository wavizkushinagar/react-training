import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Card";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname);
     


ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top Five Netflix in 2020</h1>
  {Sdata.map( (val) => {
  return(
    <Card 
    imgsrc={val.imgsrc}
    titel={val.title}
    sname={val.sname}
    link={val.links} 
    />
  )
  })};
  </>,
  document.getElementById('root')
);



