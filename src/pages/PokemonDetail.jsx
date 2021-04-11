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
    <>
    {/* <div>
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
    </div> */}
    <div className="container-fluid ttl-container" id="grass-type">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="img-container">
              <img src={`https://img.pokemondb.net/artwork/large/${listPokemonDetail.name}.jpg`} alt="" className="poke-img-dtl"/>
            </div>
          </div>
          <div className="col-md dt-ttl-container">
            <h3 className="dt-poke-id">
              #{ listPokemonDetail.id }
            </h3>
            <h2 className="display-3 dt-poke-name">
              {listPokemonDetail.name}
            </h2>
            <div className="row">
              <div className="col-md">
                <h4>
                Type :
                </h4>
                <h5>
                  <span className="badge dtl-poke" id="flying-type">
                    Flying
                  </span>
                  <span className="badge dtl-poke" id="fire-type">
                    Fire
                  </span>
                </h5>
              </div>
              <div className="col-md">
                <h4>
                Weakness :
                </h4>
                <h5>
                  <span className="badge dtl-poke" id="water-type">
                    Water
                  </span>
                  <span className="badge dtl-poke" id="electric-type">
                    Electric
                  </span>
                  <span className="badge dtl-poke" id="rock-type">
                    Rock
                  </span>
                </h5>               
              </div>
            </div>
            <div className="row">
              <div class="card">
                <div class="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PokemonDetail;
