import { useState, createContext, useEffect } from "react";
import useProductData from "../useProductData";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const { products, loading } = useProductData();
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    function getDefaultCart() {
      let cart = {};
      for (let i = 0; i < products.length; i++) {
        cart[products[i].id] = 0;
      }
      setCartItems(cart);
    }

    if (!loading) {
      getDefaultCart();
    }
  }, [products, loading]);

  function addToCart(itemId) {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] + 1,
    }));
  }

  function removeFromCart(itemId) {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] - 1,
    }));
  }

  function updateCartItemsqty(id, newQty) {
    setCartItems((prevItems) => ({ ...prevItems, [id]: newQty }));
  }

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsqty,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
