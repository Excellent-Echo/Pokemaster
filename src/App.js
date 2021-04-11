import React from "react";

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/navbar";

// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonFavorite from "./pages/PokemonFavorite";

function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
