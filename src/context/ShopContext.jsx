import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'
import cart from "../pages/Cart";
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.length; index++) {
//       cart[index] = { quantity: 0, size: "NA" }; // Store both quantity and size per item
//     }
//     return cart;
//   };

const ShopContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [count,setCount] = useState(0);
    const [size,setSize] = useState("NA");
  
    console.log(cartItems);
    const addSize = (e)=>{
        const sizet = e.target.innerText;
        console.log(size);
        setSize(sizet);
    }
    // const addSize = (itemId, selectedSize) => {
    //     setCartItems((prev) => ({
    //       ...prev,
    //       [itemId]: { ...prev[itemId], size: selectedSize },
    //     }));
    //   };
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        setCount(count+1);
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        setCount(count-1);
    }
    const contextValue = {all_product,addSize,count,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

