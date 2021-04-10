import React from "react";

// react router
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Pokemon
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokemonfavorite">
                Pokemon Favorite
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
