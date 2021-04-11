import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pokemonAction from "../redux/actions/pokemonActions";
import { pokemonFavorite } from "../redux/actions/pokemonActions";
import Swal from "sweetalert2";

const PokemonDetail = () => {
  const dispatch = useDispatch();

  // show detail data pokemon
  const listPokemonDetail = useSelector((state) => state.pokemon.detail);
  // console.log("ini list Pokemon Detail", listPokemonDetail);
  const { name } = useParams();
  useEffect(() => {
    dispatch(pokemonAction.fetchPokemonDetail(name));
    // eslint-disable-next-line
  }, [dispatch]);

  // fungsi klik untuk favorite pokomon
  function handleClick(event) {
    console.log(event);
    if (listPokemonDetail === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    } else {
      dispatch(pokemonFavorite(event));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add Favourite Success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <div className="container-fluid ttl-container" id="grass-type">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="img-container">
                <img
                  src={`https://img.pokemondb.net/artwork/large/${listPokemonDetail.name}.jpg`}
                  alt=""
                  className="poke-img-dtl"
                />
              </div>
            </div>
            <div className="col-md dt-ttl-container">
              <h3 className="dt-poke-id">#{listPokemonDetail.id}</h3>
              <h2 className="display-3 dt-poke-name">
                {listPokemonDetail.name}
              </h2>

              <div className="row">
                <div className="col-md">
                  <h4>Description :</h4>
                  <h5>
                    <span className="badge dtl-poke" id="flying-type">
                      Height : {listPokemonDetail.height}
                    </span>
                    <span className="badge dtl-poke" id="fire-type">
                      Weight : {listPokemonDetail.weight}
                    </span>
                    <span className="badge dtl-poke" id="fire-type">
                      base sexperience: {listPokemonDetail.base_experience}
                    </span>
                  </h5>
                </div>
                <div className="col-md">
                  <h4>Abilities :</h4>
                  {listPokemonDetail.abilities &&
                    listPokemonDetail.abilities.map((item, index) => {
                      return (
                        <div key={index}>
                          <h5>
                            <span className="badge dtl-poke" id="water-type">
                              {item.ability.name}
                            </span>
                            {/* <span className="badge dtl-poke" id="electric-type">
                              Electric
                            </span>
                            <span className="badge dtl-poke" id="rock-type">
                              Rock
                            </span> */}
                          </h5>
                        </div>
                      );
                    })}
                  <hr />
                </div>
              </div>
              <div>
                {listPokemonDetail.stats &&
                  listPokemonDetail.stats.map((item, index) => {
                    return (
                      <div key={index}>
                        <h2>name : {item.stat.name}</h2>
                        <p>base stat : {item.base_stat}</p>
                        <p>effort : {item.effort}</p>
                        <hr />
                      </div>
                    );
                  })}
              </div>
              {/* <div className="row">
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div> */}
              <button
                onClick={() => handleClick(listPokemonDetail)}
                type="button"
                class="btn btn-primary"
              >
                Add Favorite
              </button>
              <Link to="/pokemonfavorite">
                <button>Go to My Pokemon</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
