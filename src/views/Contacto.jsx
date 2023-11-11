import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar el formulario, por ejemplo, una solicitud HTTP a un servidor.
    console.log("Email:", email);
    console.log("Descripción:", descripcion);
    // Limpia los campos después de enviar
    setEmail("");
    setDescripcion("");
  };

  return (
    <Form className="Formulario" onSubmit={handleSubmit}>
      <p>Cuéntanos, ¿en qué te podemos ayudar?</p>
      <Form.Group className="form-1">
        <Form.Label htmlFor="email">Correo:</Form.Label>
        <Form.Control
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="form-2">
        <Form.Label htmlFor="descripcion">Descripción</Form.Label>
        <Form.Control
          as="textarea"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          rows={8}
        />
      </Form.Group>
      <Button className="btn btn-primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Contacto;

