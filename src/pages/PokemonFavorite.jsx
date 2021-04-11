import React from "react";
import { useSelector } from "react-redux";

const PokemonFavorite = () => {
  const listFavorite = useSelector((state) => state.pokemon.favorite);
  console.log("Ini favorite", listFavorite);

  return (
    <div style={{ margin: "100px" }}>
      <h3>My Favorite Pokemon</h3>
      <div>
        {listFavorite === 0 ? (
          <h3>Belum ada yang difavoritkan</h3>
        ) : (
          listFavorite.map((item, index) => (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={item.sprites.other.dream_world.front_default}
                alt="pokemon"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Height : {item.height} <br />
                  Weight : {item.weight} <br />
                  base sexperience: {item.base_experience}
                </p>
                <button className="btn btn-primary">Add To Battle</button>
                <br />
                <br />
                <button className="btn btn-primary">Delete Favorite</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonFavorite;
