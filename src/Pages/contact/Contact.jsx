import { ShopContext } from "../../context/ShopContxtProvider";
import { useContext } from "react";
import styles from "./Contact.module.css";
function ContactForm() {
  const { handleChange, handleSubmit, formData } = useContext(ShopContext);

  return (
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
          <div>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
