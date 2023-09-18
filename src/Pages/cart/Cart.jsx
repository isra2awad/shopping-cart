import styles from "./Cart.module.css";
import { ShopContext } from "../../context/ShopContxtProvider";
import { useContext } from "react";

const Cart = () => {
  const { products, cartItems, addToCart, removeFromCart, updateCartItemsqty } =
    useContext(ShopContext);
  return (
    <div className={styles.itemsContainer}>
      {products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <div className={styles.item} key={product.id}>
              <img className={styles.itemImg} src={product.image} />

              <div className={styles.description}>
                <p>{product.title}</p>
                <h6>{product.price}</h6>
                <div className={styles.qtyHandler}>
                  <button
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    -
                  </button>
                  <input
                    value={cartItems[product.id]}
                    onChange={(e) => {
                      updateCartItemsqty(product.id, e.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      addToCart(product.id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cart;
