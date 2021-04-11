import React, { useEffect } from "react";

// react router
import { useHistory } from "react-router-dom";

// react redux
import { useSelector, useDispatch } from "react-redux";

// action
import pokemonAction from "../redux/actions/pokemonActions";

import styled from "styled-components";

const Pokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // show data pokemon api
  const pokemon = useSelector((state) => state.pokemon.dataApi);
  console.log("Ini list pokemon pokemon.jsx", pokemon);
  useEffect(() => {
    dispatch(pokemonAction.fetchPokemon());
  }, [dispatch]);

  // klik menuju detail
  const handleClick = (name) => {
    history.push(`/pokemondetail/${name}`);
  };

  const FavButton = styled.button`
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
    <>
      <div className="container-fluid ttl-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-1 title">Pokédex</h1>
              <p className="subtitle">
                Search for your favourite Pokémon using its name or its National
                Pokédex number!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid src-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="frm-search" className="form-label src-label">
                <h3>Search by Name or Number</h3>
              </label>
              <input
                className="form-control form-control-lg"
                id="frm-search"
                type="text"
                placeholder="Pikachu or 61"
                aria-label="Name or Number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crd-container">
        <div className="container">
          <div className="row">
            {pokemon.results &&
              pokemon.results.map((item, index) => (
                <div className="col-sm crd-col" key={index}>
                  <div
                    className="card poke-card"
                    style={{ width: "18rem", height: "20rem" }}
                    onClick={() => handleClick(item.name)}
                  >
                    <div className="img-container">
                      <img
                        src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                        className="card-img-top poke-img"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>
                      <span className="badge crd-span" id="electric-type">
                        Electric
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
