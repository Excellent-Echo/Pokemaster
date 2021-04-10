import React from "react";
import { useSelector } from "react-redux";

const PokemonFavorite = () => {
  const listFavorite = useSelector((state) => state.pokemon.favorite);
  console.log("Ini favorite", listFavorite);

  return (
    <div>
      <h3>My Favorite Pokemon</h3>
      <div>
        {listFavorite === 0 ? (
          <h3>Belum ada yang difavoritkan</h3>
        ) : (
          listFavorite.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonFavorite;
