import { useState } from "react";
import styles from "./LeftContainer.module.css";
import Logo from "../Logo/Logo";

const LeftContainer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    if (!email) return "Email is required.";
    if (email.endsWith("@ezworks.com"))
      return "Email with @ezworks.com is not allowed.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const validation = validateEmail(email);
    if (validation) {
      setError(validation);
      return;
    }

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();
      //   console.log({ ...data, message: email });
      if (response.ok) {
        setMessage("Form Submitted");
      } else {
        setMessage("Error submitting form");
      }
    } catch (error) {
      setMessage("Error submitting form");
    }

    setEmail("");
  };

  return (
    <div className={styles.container}>
      <Logo />
      <p className={styles.subtitle}>Suite Of Business Support Services</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...
      </p>

      <form className={styles.contact} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Contact Me</button>
      </form>

      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default LeftContainer;
