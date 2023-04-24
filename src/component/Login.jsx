import React from "react";

function Login(props) {
  return (
    <div className="modal fade" id="loginModel" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
              Login
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="col-form-label">Email:</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-4">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>

              <button type="submit" className="btn btn-light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
