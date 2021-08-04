import react from "react";
import Images from "./Images";
import Heading from "./Heading";


function Card(props) {
  
    return (
      <>
        <div className="cards">
          <div className="card">
          <Images imgsrc={props.imgsrc}/>
            <div className="card__info">
              <span className="card__category">{props.titel} </span>
             <Heading sname={props.sname}/>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Card;