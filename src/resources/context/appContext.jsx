import { createContext, useState } from "react";

const appContext = createContext({});
const Provider = appContext.Provider;

function AppProvider(props) {
  // Se que estoy mezclando cart y fav en el mismo context cuando no tienen mucho que ver, pero no iba a crear otro context solo para 1 estado
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [fav, setFav] = useState(false);
  const backCart = [...cart];

  function addItemToCart(product, counterCount) {
    // queria probar el prev
    setCart((prevCart) => {
      const isInCart = prevCart.some(
        (itemInCart) => itemInCart.id === product.id
      );
      if (isInCart) {
        return prevCart.map((itemInCart) => {
          if (itemInCart.id === product.id) {
            return { ...itemInCart, count: itemInCart.count + counterCount };
          }
          return itemInCart;
        });
      } else {
        return [...prevCart, { ...product, count: counterCount }];
      }
    });
  }

  function getItemStock(itemId) {
    const item = cart.find((itemInCart) => itemInCart.id === itemId);
    return item ? item.stock : 0;
  }

  function getCountInCart(itemId) {
    const item = cart.find((itemInCart) => itemInCart.id === itemId);
    return item ? item.count : 0;
  }

  function modifyItemCount(itemId, quant) {
    // otro mas que me tomo un ratito..
    const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === itemId);
    const { count, stock } = backCart[itemIndex];
    const newCount = count + quant;
    const updatedCount = newCount > 0 ? Math.min(newCount, stock) : 1;
    backCart[itemIndex].count = updatedCount;
    setCart(backCart);
  }

  function getCartCount() {
    let totalCount = 0;
    cart.forEach((item) => (totalCount += item.count));
    return totalCount;
  }

  function removeFromCart(itemId) {
    setCart(cart.filter((item) => item.id !== itemId));
  }

  function getCartPrice() {
    let totalPrice = 0;
    cart.forEach((item) => {
      const itemPrice =
        item.offer > 0
          ? (1 - item.offer / 100) * item.price * item.count
          : item.price * item.count;

      totalPrice += itemPrice;
    });
    return totalPrice;
  }

  function clearCart() {
    setCart([]);
  }
  function setFavItem(product) {
    setFav(product);
  }

  return (
    <Provider
      value={{
        cart,
        addItemToCart,
        fav,
        setFavItem,
        getCartCount,
        getCartPrice,
        addedToCart,
        setAddedToCart,
        removeFromCart,
        getItemStock,
        modifyItemCount,
        getCountInCart,
        clearCart,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { appContext, AppProvider };
