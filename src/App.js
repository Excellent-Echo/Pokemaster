import React from "react";

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/navbar";
import Footer from "./components/foot"

// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonFavorite from "./pages/PokemonFavorite";

import "./App.css";

function App() {
  return (
    <>
    <div className="container-fluid">
      <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact={true}>
              <Pokemon />
            </Route>
            <Route path="/pokemondetail/:name">
              <PokemonDetail />
            </Route>
            <Route path="/pokemonfavorite">
              <PokemonFavorite />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
      </Router>
    </div>
    <Footer />
    </>
  );
}

export default App;
