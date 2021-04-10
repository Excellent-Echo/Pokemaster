import React, { useEffect } from "react";

// router dom
import { useParams, Link } from "react-router-dom";

// react redux
import { useDispatch, useSelector } from "react-redux";

// actions
import pokemonAction from "../redux/actions/pokemonActions";
import { pokemonFavorite } from "../redux/actions/pokemonActions";

const PokemonDetail = () => {
  const dispatch = useDispatch();

  // show detail data pokemon
  const listPokemonDetail = useSelector((state) => state.pokemon.detail);
  console.log("ini list Pokemon Detail", listPokemonDetail);
  const { name } = useParams();
  useEffect(() => {
    dispatch(pokemonAction.fetchPokemonDetail(name));
    // eslint-disable-next-line
  }, [dispatch]);

  // fungsi klik untuk favorite pokomon
  function handleClick(event) {
    dispatch(pokemonFavorite(event));
  }

  return (
    <div>
      <div>
        <h2>Name : {listPokemonDetail.name}</h2>
        <h2>base_experience: {listPokemonDetail.base_experience}</h2>
        <h2>base_experience: {listPokemonDetail.weight}</h2>
        <Link to="/pokemonfavorite" style={{ textDecoration: "none" }}>
          <button onClick={() => handleClick(listPokemonDetail)}>
            Add Favorite
          </button>
        </Link>
        <h4>1. Oh ya mas randhika untuk data detailnya masih banyak</h4>
        <h4>2. bisa dilihat di console log</h4>
        <h4>3. kalau bisa dipanggi aja pakai map yg bentuk array of object</h4>
        <h4>4. kalau belum bisa gpp layout aja nanti aku mapping sendiri</h4>
      </div>
    </div>
  );
};

export default PokemonDetail;
