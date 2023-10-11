import React from "react";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="row login-section">
        <div className="row login-section-width d-flex justify-content-between align-items-center">
          <div className="col-md-6 login-text">
            <p className="login-text-heading">facebook</p>
            <p className="login-text-description">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center login-field">
            <div className="p-3 text-center login-area">
              <form className="row g-4 p-2 d-flex flex-column">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    placeholder="Email address or phone number"
                  />
                </div>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="col d-grid">
                  <button type="submit" className="btn btn-primary mb-3">
                    Login
                  </button>
                </div>
              </form>
              <a href="#" className="d-block mt-3 mb-4 forgot-password">
                Forgotten password?
              </a>
              <hr />
              <input
                type="button"
                class="btn btn-success m-3"
                value="Create new account"
              />
            </div>
            <div className="mt-5 create-page">
              <a href="#">Create a page</a>{" "}
              <span>for a celebrity, brand or business.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row login-footer">
        <p className="d-flex align-items-end pb-3 login-footer-text">
          &copy; All rights reserved!
        </p>
      </div>
    </div>
  );
};
