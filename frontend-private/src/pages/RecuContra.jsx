import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "./Recucontra.css";

const Recucontraa = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Inicializar navegación

  const handleSend = () => {
    if (!email) return alert("Ingresa un correo válido");

    alert(`Enviaremos un correo a: ${email}`);

    // Guardar el correo si lo necesitas más adelante
    localStorage.setItem("correoRecuperacion", email);

    // Redirigir a la pantalla de verificación de código
    navigate("/verificar");
  };

  const handleCancel = () => {
    setEmail("");
  };

  return (
    <div className="reset-container">
      <h1 className="reset-title">Restablecer contraseña de cuenta</h1>

      <div className="home-container">
        {/* Imagen */}
        <div className="reset-image-container">
          <img src="/18.18.png" alt="Recuperación" className="reset-image" />
        </div>

        {/* Formulario */}
        <div className="reset-form">
          <p className="reset-description">
            Te enviaremos un email para restablecer tu contraseña.
          </p>

          <label htmlFor="email" className="reset-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@gmail.com"
            className="reset-input"
          />

          <div className="reset-buttons">
            <button onClick={handleSend} className="btn-activate">
              Activar
            </button>
            <button onClick={handleCancel} className="btn-cancel">
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recucontraa;
