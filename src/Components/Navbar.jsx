import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import styles from "./Navbar.module.css";

export const Nav = (props) => {
  console.log();
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/shop">Products</Link>

        <Link to="/contact">Contact Us</Link>

        <Link to="/cart">
          <ShoppingCart size={32} />
          {props.counter > 0 ? (
            <small className={styles.counter}>{props.counter}</small>
          ) : (
            ""
          )}
        </Link>
      </div>
    </nav>
  );
};
