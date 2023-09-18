import { useState, createContext, useEffect } from "react";
import useProductData from "../useProductData";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const { products, loading } = useProductData();
  const [cartItems, setCartItems] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  function getTotalItems() {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }
  function getTotalCartPrice() {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemDetails = products.find(
          (product) => product.id === Number(item),
        );
        totalPrice += cartItems[item] * itemDetails.price;
      }
    }
    return totalPrice;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  const contextValue = {
    products,
    cartItems,
    formData,
    addToCart,
    removeFromCart,
    updateCartItemsqty,
    getTotalCartPrice,
    handleChange,
    handleSubmit,
    getTotalItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
