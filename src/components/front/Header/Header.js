import React from "react";
import { NavLink } from "react-router-dom";
// import "./Header.css"
const Header = ({ cartItems }) => {
    return (

    

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{  position: "sticky",zIndex:"1",
   top:"0" , fontSize:"18px", fontWeight:"700"}}>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/"  >Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">Home</NavLink>
      </li>
   
    </ul>
    <ul className="navbar-nav mr">
    <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Singup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/cart" className="nav-link" ><i className="fas fa-shopping-cart"/>
        <span className="cart-length">
        {cartItems.length === 0 ? "" : cartItems.length}
        </span>
        </NavLink>
      </li>
    </ul>
  </div>
</nav>

    );
};

export default Header;