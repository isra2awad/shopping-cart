import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import styles from "./Navbar.module.css";
import { ShopContext } from "../context/ShopContxtProvider";
import { useContext } from "react";

export const Nav = () => {
  const { getTotalItems } = useContext(ShopContext);
  const totalItems = getTotalItems();
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Products</Link>

        <Link to="/contact">Contact Us</Link>

        <Link to="/cart">
          <div className={styles.ShoppingCart}>
            <ShoppingCart size={32} />
            {totalItems > 0 ? (
              <small className={styles.counter}>{totalItems}</small>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};
