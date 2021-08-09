import React from 'react';
import Sdata from './Sdata';
import Card from './Card';


const Amazon = () => {
return(
    <Card 
    key={Sdata[3].key}
    imgsrc={Sdata[3].imgsrc}
    titel={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].links} 
    />
  );
};
export default Amazon;