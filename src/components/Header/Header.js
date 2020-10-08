import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../assets/hooks/useAuth";
import Login from "../Login/Login";
import "./Header.css";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const auth = Auth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {auth.singInUser ? (
                <div>
                  <img
                    className="px-2"
                    src={auth.singInUser.photo}
                    style={{ width: "50px", borderRadius: "50px" }}
                    alt=""
                  />
                  <button
                    onClick={auth.signOutGoogle}
                    className="btn btn-danger btn-sm"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-warning btn-sm"
                  onClick={handleShowModal}
                >
                  Login
                </button>
              )}
            </li>
            {showModal ? (
              <Login show={showModal} handleClose={handleCloseModal}></Login>
            ) : (
              false
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
