import styles from "./Cart.module.css";
import { ShopContext } from "../../context/ShopContxtProvider";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsqty,
    getTotalCartPrice,
  } = useContext(ShopContext);

  let totalPrice = getTotalCartPrice();
  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
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
                      updateCartItemsqty(product.id, Number(e.target.value));
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

      {totalPrice > 0 ? (
        <div className={styles.checkOut}>
          <p>subtotal: {totalPrice}$</p>
          <button
            className={styles.btn}
            onClick={() => {
              alert("Order is sumbitted we will get back to you soon");
            }}
          >
            Check out
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              navigate("/shop");
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <h1>Your Cart is empty.</h1>
      )}
    </div>
  );
};

export default Cart;
