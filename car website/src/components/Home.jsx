import { Header ,Footer } from "../components";
import {Link} from "react-router-dom"
import "../CSS/Home.css"



export const Home = () => {
    return (
        <div>
         
            <div className="home">
            <div className="text">   
            <h1>car hub</h1>
            <p>just muscle cars</p>
            <Link className="product-link-home" to="/products">order now</Link>
            {/* <button>order now</button> */}
            </div>
            <div className="home-banner">
            {/* <img  src="./src/images/home-banner.jpg"></img> */}
            </div>
            </div>
           
        </div>


    )
}