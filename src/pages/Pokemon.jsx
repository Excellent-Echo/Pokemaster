import React, { useEffect } from "react";

// react router
import { useHistory } from "react-router-dom";

// react redux
import { useSelector, useDispatch } from "react-redux";

// action
import pokemonAction from "../redux/actions/pokemonActions";

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

  return (
    <div>
      {pokemon.results &&
        pokemon.results.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => handleClick(item.name)}
              src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
              alt="pokemon"
              className="h-64 ml-auto mr-auto"
            />
            <div>
              <h2 onClick={() => handleClick(item.name)}>{item.name}</h2>
              <h2 onClick={() => handleClick(item.name)}>Click Detail!</h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pokemon;
