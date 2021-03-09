import React from "react";

function Login() {
  return (
    <div className="row mt-2">
      <div className="col"></div>
      <div className="col">
        <form action="" className="form-group">
          <input
            type="email"
            className="form-control mt-4"
            placeholder="Introduce el email"
          />
          <input
            type="password"
            className="form-control mt-4"
            placeholder="Introduce el password"
          />
          <input
            type="submit"
            className="btn btn-dark btn-block mt-4"
            value="Registrar un usuario"
          />
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}

export default Login;
