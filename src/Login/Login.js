import React from "react";
import imgLogin from "../assets/SVG/loginImg.jpg";

const Login = () => {
  return (
    <section
      class="vh-100"
      style={{
        background: "linear-gradient(to right, #FFFFFF, #EA8D8D, #FF8C8C)",
      }}
    >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div
              class="card"
              style={{ borderRadius: "1rem", backgroundColor: "#F9F9F8" }}
            >
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={imgLogin}
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i
                          class="fas fa-print fa-2x me-3"
                          style={{ color: "#CD295A" }}
                        ></i>
                        <span class="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form1Example1"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form1Example1">
                          Email address
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form1Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form1Example2">
                          Password
                        </label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <a class="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" class="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" class="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
