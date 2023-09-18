import { useParams } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContxtProvider";
import { Nav } from "./Components/Navbar";
import Cart from "./Pages/cart/Cart";
import Contact from "./Pages/contact/Contact";
import DefaultPage from "./Pages/default/DefaultPage";
import Shop from "./Pages/shop/shop";
import styles from "./App.module.css";
const App = () => {
  const { name } = useParams();

  return (
    <div className={styles.app}>
      <ShopContextProvider>
        <Nav />

        {name === "cart" ? (
          <Cart />
        ) : name === "contact" ? (
          <Contact />
        ) : name === "shop" ? (
          <Shop />
        ) : (
          <DefaultPage />
        )}
      </ShopContextProvider>
    </div>
  );
};

export default App;
