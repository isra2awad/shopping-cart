import styles from "./Cart.module.css";
import { ShopContext } from "../../context/ShopContxtProvider";
import { useContext } from "react";

const Cart = () => {
  const { products, cartItems } = useContext(ShopContext);
  return (
    <div className={styles.itemsContainer}>
      {products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <div className={styles.item} key={product.id}>
              <div>
                <img className={styles.itemImg} src={product.image} />
              </div>
              <div>
                <p>{product.title}</p>
                <h6>{product.price}</h6>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cart;
