import React from "react";
import "../CSS/Welcome.css";

import { useNavigate } from "react-router-dom";


export default function Navbar3() {
  let navigate = useNavigate();



  let handleBeforeLogout = async () => {
    localStorage.clear();
    navigate("/loginBefore");
  };

  return (
    <div id="content">
      <nav
        className="navbar  navbar-expand-lg bg-dark fixed-top"
        style={{ color: "white" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }} href="/">
            INDO Services
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link active me-4"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active me-4"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/Dashboard"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="btn btn-outline-success mx-2"
              onClick={() => handleBeforeLogout()}
            >
              LOG Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
