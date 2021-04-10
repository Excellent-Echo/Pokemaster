import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <header>
          <nav className = "navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container">
            <ul class="navbar-nav">
              <li class="nav-item">
                  <Link className = "nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                  <Link className = "nav-link" to="/register">Register</Link>
              </li>
              <li class="nav-item">
                  <Link className = "nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
                  <Link className = "nav-link" to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          </nav>
          <div>
            <Switch>
              <Route path="/register">
                  <Register />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </header>
      </Router>
    </>
  )
}

export default App;