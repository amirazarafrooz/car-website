import { Header ,Footer } from "../components";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { myproductsList } from "../data/data.js";
import "../CSS/Productdetails.css";


export const Productdetails = () => {
  console.log('matn');
  const params = useParams();

  if(!myproductsList[params.id]) {
    return (<div className="not-found-container">
      <img className="car-not-found" src="../src/images/car-not-found.png"></img>
    </div>)
  }
  const [productDetails, setPoductDetails] = useState([]);

  useEffect(() => {
    setPoductDetails(myproductsList[params.id]);
  }, []);

  const { id, name, cost, imgLink, caption } = productDetails;


  console.log(params.id);
  
  return (
    <div>
     
      <div className="main-container">
        <div className="container-text">
          <h2 className="product-name">{name}</h2>
          <p className="product-caption">{caption}</p>
          <p className="product-cost">COST : {cost}</p>
          <button className="product-buy"> BUY NOW </button> 
          <Link className="back-product" to="/products">Products page</Link>
        </div>
        <div className="container-image"></div>
        <img className="product-img" src={imgLink}></img>
      </div>
  
    </div>
  );
};
