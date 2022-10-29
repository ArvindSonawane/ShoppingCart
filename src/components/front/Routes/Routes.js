import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import {  Route} from 'react-router-dom';
import Login from "../../Form/Login";
import Signup from "../../Form/Signup";
import Home from "../../../Home";
 const Routes=({productItems,cartItems,handleAddProduct, handleRemoveProduct})=>{
    return(
    
        <div>
        
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                
            </Route>
            <Route  path="/cart" exact>
                <Cart cartItems={cartItems} 
                handleAddProduct={handleAddProduct}
                 handleRemoveProduct={ handleRemoveProduct}/>
               
            </Route>
            <Route  path="/Login" exact>
               <Login />
               
            </Route>
            <Route  path="/signup" exact>
               <Signup />
               
            </Route>
            <Route  path="/Home" exact>
               <Home />
               
            </Route>
          </div>
              
    );
 };

 export default Routes;