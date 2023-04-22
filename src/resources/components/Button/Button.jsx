import styles from "./button.css";

const Button = ({ color, opacity, onClick, disabled, text, children }) => {
  const styleB = {
    backgroundColor: color,
    opacity: opacity,
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.btn}
      style={styleB}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
