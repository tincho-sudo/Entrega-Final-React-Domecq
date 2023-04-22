import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./inputForm.css";

function InputForm({ handleSubmit, buttonText, showSubject }) {
  const [userData, setUserData] = useState({
    Nombre: { value: "", type: "text", key: "1" },
    Email: { value: "", type: "email", key: "2" },
    Asunto: { value: "", type: "text", key: "3" },
    Mensaje: { value: "", type: "textarea", key: "4" },
  });
  const inputs = Object.keys(userData);

  function handleInputChange(evt) {
    evt.preventDefault();
    const newUserData = { ...userData };
    const inputId = evt.target.name;
    const inputText = evt.target.value;
    newUserData[inputId].value = inputText;
    setUserData(newUserData);
  }
  return (
    <div className="form-container">
      <Form id="input-form" onSubmit={(evt) => handleSubmit(userData,evt)}>
        {inputs.map(
          (item) =>
            (showSubject || item !== "Asunto") && (
              <Form.Group key={userData[item].key} controlId={item}>
                <Form.Label>{item}</Form.Label>
                <Form.Control
                  key={userData[item].key}
                  type={userData[item].type}
                  placeholder={item}
                  name={item}
                  onChange={handleInputChange}
                  required={item !== "Mensaje"}
                  // required solo si no es el mensaje
                />
              </Form.Group>
            )
        )}
        <Button variant="primary" type="submit">
          {buttonText}
        </Button>
      </Form>
    </div>
  );
}
export default InputForm;
