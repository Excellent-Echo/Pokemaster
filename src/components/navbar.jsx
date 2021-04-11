import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function navbar() {
  const LoginButton = styled.button`
    cursor: pointer;
    background: #c1292e;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #c1292e;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #f4f4f6;
    font-weight: bold;

    &:hover {
      background-color: #f4f4f6;
      color: #c1292e;
    }
  `;

  const RegisButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #c1292e;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #c1292e;
    font-weight: bold;

    &:hover {
      background-color: #c1292e;
      color: #f4f4f6;
    }
  `;

  return (
    <div className="container-fluid">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pokédex
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/pokemonfavorite">
                  My Pokémon
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <RegisButton>Register</RegisButton>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <LoginButton>Login</LoginButton>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
