import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export default function useECommerce() {
  const [productsCount, setProductsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  //const [cartItemsGrouped, setCartItemsGrouped] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    //set total number of products
    setProductsCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    //set total price
    setTotalPrice(
      cartItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0)
    );
  }, [cartItems]);

  const addProduct = ({ product }) => {
    const cartItemsCopy = [...cartItems];
    //find index of given product in cartItems
    const productIndex = cartItemsCopy.findIndex((item) => item.productId === product.id);
    if (productIndex >= 0) {
      cartItemsCopy[productIndex].quantity++;
      setCartItems([...cartItemsCopy]);
    } else {
      cartItemsCopy.push({
        productId: product.id,
        quantity: 1,
        product: product,
      });
      setCartItems([...cartItemsCopy]);
    }
  };

  const removeProduct = ({ product }) => {
    const cartItemsCopy = [...cartItems];
    //find index of given product in cartItems
    const productIndex = cartItemsCopy.findIndex((item) => item.productId === product.id);

    if (productIndex >= 0) {
      if (cartItemsCopy[productIndex].quantity > 1) {
        cartItemsCopy[productIndex].quantity--;
        setCartItems([...cartItemsCopy]);
      } else {
        setCartItems(cartItemsCopy.filter((ci) => ci.productId !== product.id));
      }
    } else {
      console.log("THIS PRODUCT IS NOT IN THE CART");
    }
  };

  const removeAllProducts = ({ product }) => {
    const filtered = cartItems.filter((ci) => ci.productId !== product.id);
    setCartItems(filtered);
  };

  return { cartItems, productsCount, totalPrice, addProduct, removeProduct, removeAllProducts };
}
