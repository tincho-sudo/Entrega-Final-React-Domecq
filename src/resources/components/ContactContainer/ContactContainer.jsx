import { createMessage } from "../../../services/db";

import swal from "sweetalert";
import "./contactContainer.css";
import InputForm from "../InputForm/InputForm";

function ContactContainer() {
  async function handleSubmit(userData,evt) {
    evt.preventDefault();
    const messageData = {};
    Object.entries(userData).forEach(([key, value]) => {
      messageData[key] = value.value;
    });
    const messageId = await createMessage(messageData);
    await swal({
      title: "Gracias por tu mensaje!",
      text: `Te dejamos tambien el código para futura referencia. Código: ${messageId.id}`,
      icon: "success",
    });
  }
  return (
    
      <InputForm
        handleSubmit={handleSubmit}
        buttonText={"Enviar"}
        showSubject={true}
      />
  );
}

export default ContactContainer;
