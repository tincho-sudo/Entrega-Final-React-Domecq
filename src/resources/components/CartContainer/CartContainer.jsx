import { Table } from "react-bootstrap";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { createOrder, updateStock } from "../../../services/db";
import "./cartContainer.css";
import swal from "sweetalert";
import InputForm from "../InputForm/InputForm";
const CartContainer = () => {
  const {
    cart,
    getCartPrice,
    removeFromCart,
    getItemStock,
    modifyItemCount,
    clearCart,
  } = useContext(appContext);
  const totalPrice = getCartPrice();

  function handleAdd(itemCount, itemId) {
    if (itemCount < getItemStock(itemId)) modifyItemCount(itemId, 1);
  }

  function handleSubstract(itemCount, itemId) {
    if (itemCount > 0) modifyItemCount(itemId, -1);
  }

  function handleRemove(itemId) {
    removeFromCart(itemId);
  }

  async function handleCheckout(userData, evt) {
    evt.preventDefault();
    const items = cart.map((item) => {
      const discountedPrice =
        item.offer > 0 ? (1 - item.offer / 100) * item.price : item.price;

      return {
        id: item.id,
        title: item.title,
        count: item.count,
        price: discountedPrice.toFixed(2),
      };
    });

    const messageData = {};
    Object.entries(userData).forEach(([key, value]) => {
      messageData[key] = value.value;
    });

    const order = {
      items: items,
      buyer: messageData,
      date: new Date(),
      total: totalPrice.toFixed(2),
    };

    const orderId = await createOrder(order);
    updateStock(order);
    await swal({
      title: "Gracias por tu compra",
      text: `La operacion se completó correctamente. Ticket: ${orderId.id}`,
      icon: "success",
    });
    clearCart();
  }
  //pasar todo el cart.map a otro componente y mandarle por props las cosas
  return cart[0] ? (
    <main className="tableContainer">
      <Table striped bordered hover responsive>
        <thead style={{ color: "white", fontWeight: "bold" }}>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} />
              </td>

              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td>
                <Button
                  onClick={() => handleSubstract(item.count, item.id)}
                  color="#4caf50"
                >
                  -
                </Button>
                {item.count}
                <Button
                  onClick={() => handleAdd(item.count, item.id)}
                  color="#4caf50"
                >
                  +
                </Button>
              </td>
              <td>
                $
                {item.offer > 0
                  ? (1 - item.offer / 100) * item.price.toFixed(2)
                  : item.price.toFixed(2)}
              </td>
              <td>
                <Button id="removeBtn" onClick={() => handleRemove(item.id)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ fontWeight: "bold" }}>Total:</td>
            <td style={{ fontWeight: "bold" }}>${totalPrice.toFixed(2)}</td>
            <td>
              <Button onClick={() => clearCart()}>X</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* <Button onClick={handleCheckout}>Finalizar Compra</Button> */}
      <InputForm
        handleSubmit={handleCheckout}
        buttonText={"Confirmar compra"}
        showSubject={false}
      />
    </main>
  ) : (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginTop: "120px" }}>No hay articulos en el carrito</h2>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "underline",
          fontWeight: "bold",
          marginTop: "150px",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default CartContainer;
