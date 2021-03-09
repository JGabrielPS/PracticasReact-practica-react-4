import React, { useState } from "react";
import auth from "../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const registrarUsuarios = async (e) => {
    e.preventDefault();

    try {
      const resp = await auth.createUserWithEmailAndPassword(email, pass);
      resp && alert("Usuario registrado");
    } catch ({ code }) {
      if (code === "auth/invalid-email") {
        setError("El formato del mail ingresado es incorrecto");
      }

      if (code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      }
    }
  };

  return (
    <div className="row mt-2">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={registrarUsuarios} className="form-group">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control mt-4"
            placeholder="Introduce el email"
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control mt-4"
            placeholder="Introduce el password"
          />
          <input
            type="submit"
            className="btn btn-dark btn-block mt-4"
            value="Registrar un usuario"
          />
          {error && <p className="alert alert-danger mt-4">{error}</p>}
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}

export default Login;
