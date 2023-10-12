import { useNavigate } from "react-router-dom";
import styles from "./DefaultPage.module.css";

const DefaultPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Isra's Shop</h1>
      <button
        className={styles.shopButton}
        onClick={() => {
          navigate("/shop");
        }}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default DefaultPage;
