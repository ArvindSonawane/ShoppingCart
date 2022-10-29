import React from 'react';
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import Routes from"./components/front/Routes/Routes";
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer/Footer';



const useState=React.useState
const useEffect=React.useEffect

const cartFromLocalStorage=JSON.parse(localStorage.getItem("exampleCartData") || '[]')

const App=()=>{
  const {productItems}=data;
  const [cartItems,setCartItems]=useState(cartFromLocalStorage);


  useEffect(()=>{
    localStorage.setItem("exampleCartData",JSON.stringify(cartItems))
  },[cartItems])



 const handleAddProduct=(product)=>{
const ProductExist = cartItems.find((item)=> item.id === product.id);
if(ProductExist){
  setCartItems(cartItems.map((item) => item.id === product.id ?
  {...ProductExist,quantity:ProductExist.quantity + 1}:item)
  );
} else{
  setCartItems([...cartItems,{...product,quantity:1}]);

}
 };
 const handleRemoveProduct =(product)=>{
  const ProductExist = cartItems.find((item)=> item.id === product.id);
  if(ProductExist.quantity === 1){
    setCartItems(cartItems.filter((item)=>item.id !== product.id));
  } else{
    setCartItems(
      cartItems.map((item)=> item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity - 1}:item
      )
    );
  }

 };
  return<div>
    <Router>
      <Header cartItems={cartItems}/>
      <Routes productItems={productItems} 
      cartItems={cartItems}
       handleAddProduct={handleAddProduct}
       handleRemoveProduct={ handleRemoveProduct}
    
       /> 
       
    </Router>
    <Footer/>

  </div>
};

export default App;