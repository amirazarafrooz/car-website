import {myproductsList} from "../data/data.js"
import "../CSS/Product.css"
import { Header ,Footer } from "../components";
import {Cards} from "./Cards"




export const Products = () => {
  

  return (
    <div>
          
            <div className="product-container">
            <h1>OUR CARS</h1>
            <div className="productList">
          {myproductsList.map(({name,cost,URL,imgLink}) => <Cards value={name} cost={cost} URL={URL} imgLink={imgLink}/>)}
        </div>
         </div>
       
        </div>


    )
}