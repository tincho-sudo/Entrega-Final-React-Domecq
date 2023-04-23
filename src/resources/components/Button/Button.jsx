import styles from "./button.css";

const Button = ({
  color,
  opacity,
  onClick,
  disabled,
  text,
  children,
  display,
}) => {
  const styleB = {
    backgroundColor: color,
    opacity: opacity,
    display: display,
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
