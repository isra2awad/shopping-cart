// import { useParams } from "react-router-dom";
// import DefaultProfile from "../default/DefaultProfile";
import { useState, useEffect, useContext } from "react";
import styles from "./ShopApp.module.css";
import { ShopContext } from "../../context/ShopContxtProvider";

const Shop = () => {
  // const { name } = useParams();
  const { products, addToCart, removeFromCart, cartItems } =
    useContext(ShopContext);

  return (
    <div className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1>Here are Our products</h1>
      </div>
      <div className={styles["shop-container"]}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>

            <p>${product.price}</p>
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className={styles.addToCartBttn}
            >
              Add to Cart
              {cartItems[product.id] > 0 ? <> ({cartItems[product.id]})</> : ""}
            </button>
            {cartItems[product.id] > 0 ? (
              <button
                className={styles.addToCartBttn}
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                Remove
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
