import React from "react";
import { useSelector } from "react-redux";
import pokemonAction from "../redux/actions/pokemonActions";

const PokemonFavorite = () => {

  const handleRemove = pokemonAction.handleRemove;
  const listFavorite = useSelector((state) => state.pokemon.favorite);
  const removeFavorite = useSelector((state) => state.pokemon.remove);
  console.log("Ini favorite", listFavorite);

  return (
    <>
    <div className="container-fluid ttl-container" id="ghost-type">
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-1 title">My Pokémon</h1>
              <p className="subtitle">
                You will find your Pokémon Collections here.
              </p>
            </div>
          </div>
        </div>
    </div>
    <div className="container-fluid crd-container">
      <div className="container">
        <div className="row">
          {listFavorite === 0 ? (
            <h3>Empty ! Go catch some Pokémons!</h3>
          ) : (
            listFavorite.map((item, index) => (
              <div className="col-md crd-col">
                <div className="card poke-card fav-card" key={{ index }} style={{ width: "18rem" }}>
                  <div className="btn-remove-container">
                    <button className="btn btn-danger btn-sm btn-remove" onClick={() => handleRemove(removeFavorite)}>
                      Remove
                    </button>
                  </div>
                  <div className="img-container">
                    <img
                      className="card-img-top poke-img"
                      src={ `${ item.sprites.other.dream_world.front_default ? item.sprites.other.dream_world.front_default : "../assets/pokelogo.png" }` }
                      alt="pokemon"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <p className="card-text"> */}
                    <h6>
                    { item.types &&
                      item.types.map((item, index) => {
                        return (
                          <span key={ index } className="badge crd-span" id={ `${ item.type.name }-type` }>
                            {item.type.name}
                          </span>
                        );
                      })}
                    </h6>
                    <h6>
                      <span className="badge crd-span" id="normal-type">
                        HEIGHT : { item.height }
                      </span>
                      <span className="badge crd-span" id="normal-type">
                        WEIGHT : { item.weight }
                      </span>
                    </h6>
                    {/* </p> */}
                    <button className="btn btn-primary">Add To Battle</button>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default PokemonFavorite;
