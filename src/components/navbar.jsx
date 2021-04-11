import React from "react";

// react router
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../pages/Login";

function navbar() {

  const LoginButton = styled.button`
    cursor: pointer;
    background: #C1292E;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #C1292E;
    padding: 0.25em 0.50em;
    transition: 0.2s all ease-out;
    color: #F4F4F6;
    font-weight: bold;

    &:hover {
    background-color: #F4F4F6;
    color: #C1292E;
    }
  `;

  const RegisButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #C1292E;
    padding: 0.25em 0.50em;
    transition: 0.2s all ease-out;
    color: #C1292E;
    font-weight: bold;

    &:hover {
    background-color: #C1292E;
    color: #F4F4F6;
    }
  `;

  return (
    <div className="container-fluid">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <div class="container">
          <Link className="navbar-brand" to="/">Pokédex</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link className="nav-link" to="/pokemonfavorite">My Pokémon</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/register">
                <RegisButton>Register</RegisButton>
              </Link>
              </li>
              <li class="nav-item">
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
