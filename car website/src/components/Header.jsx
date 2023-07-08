import { Link } from "react-router-dom"
import "../CSS/header.css"
import { NavLink } from "react-router-dom"




  export const Header = () => {

return(
<div className='header'>
        <div className="logo">
          <a href="/"><img src="../src/images/logo.png"></img></a>
        </div>
        <nav>
          <ul>
            <li><NavLink className="nav-item" activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink className="nav-item" activeClassName="active" to="/products">products</NavLink></li>
            <li><NavLink className="nav-item" activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink className="nav-item" activeClassName="active" to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
)
  }