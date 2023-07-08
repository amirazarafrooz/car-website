import "../CSS/Card.css";
import React from "react";
import { Link } from "react-router-dom";
import { Productdetails } from "./Productdetails";

export const Cards = ({ value, cost, URL, imgLink }) => {

// {card.map(({id,value}) =><Productdetails id={id} value={value}/>)}

  // console.log(card);
  console.log({imgLink});
  return (
      <div className="card">
        <div className="product-image">
          <img src={imgLink}></img>
        </div>
        <div className="text-cost">
          <h3>{value}</h3>
          <p>{cost}</p>
        </div>
          <Link to={URL} className="product-link">more details</Link>
      </div>
      
  );
};
