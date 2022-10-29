import React from "react";
import"./Products.css"
const Products=({productItems, handleAddProduct})=>{
    return(
        <>
 
        {productItems.map((productItem)=>(
            <div className="card-container " style={{display:"-webkit-inline-flex"}}>
            
            <div className="row">
              <div className="col-sm">
              <div className="card"  style={{width:"24vw", height:"92vh"}}>
            <img  src={productItem.image} alt="Card image cap" style={{height:"370px"}}></img>
            <div className="card-body">
              <h5 className="card-name">{productItem.name}</h5>
              <h5 className="card-price">₹.{productItem.price}</h5>
             
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
              
              <p className="card-text">Some quick example text to build on the card title and make up the bulk </p>
              <button type="button" className="btn btn-primary" style={{width:"22vw"}}
               onClick={()=>handleAddProduct(productItem)}>Add To Cart</button>
            </div>
            </div>
              </div>
            
              
             </div>
            </div>
        ) )}
   
    </>
    );
};
export default Products;



        
