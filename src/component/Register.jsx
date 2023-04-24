import React from "react";

function Register(props) {
  return (
    <div className="modal fade" id="registerModel" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
              Register
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
                <label className="col-form-label">Name:</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email:</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-4">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" name="password" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
