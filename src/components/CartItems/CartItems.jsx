import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { all_product, cartItems, removeFromCart,size } = useContext(ShopContext);
  // const cartProducts = all_product.filter((e) => cartItems[e.id] > 0);

  return (
    <div className="cart-items">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p className="title">Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
              <div>
                <div className="cartitems-format">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <div className="name">{e.name}</div>
                  <p className="price">{e.new_price}</p>
                  <p>{size}</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p className="price2">{e.new_price*cartItems[e.id]}</p>
                  <img className="remove"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
