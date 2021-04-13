import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pokemonAction from "../redux/actions/pokemonActions";
import { pokemonFavorite } from "../redux/actions/pokemonActions";
import Swal from "sweetalert2";
import styled from "styled-components";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from "recharts";

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
        position: "top-center",
        icon: "success",
        title: "Add Favourite Success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  const FavButton = styled.button`
    cursor: pointer;
    background: #c1292e;
    font-size: 17px;
    border-radius: 5px;
    border: 3px solid #c1292e;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #f4f4f6;
    font-weight: bold;
    text-transform: capitalize;
    width: 100%;

    &:hover {
      background-color: #f4f4f6;
      color: #c1292e;
    }
  `;

  return (
    <>
      <div className="container-fluid ttl-container" id="dark-type">
        <div className="container">
          <br/>
          { console.log(listPokemonDetail) }
          <div className="row">
            <div className="col-md">
              <div className="container-fluid container-md">
                <div className="row">
                  <div className="col-md">
                      <Link to="/">
                      <FavButton className="btn-fav">Back</FavButton>
                    </Link> 
                  </div>
                  <div className="col-md">
                    <FavButton onClick={() => handleClick(listPokemonDetail)}>
                        Favourite { listPokemonDetail.name }
                    </FavButton>
                  </div>
                </div>
                <br/>
                <div className="dtl-img-container">
                  <img
                    src={`https://img.pokemondb.net/artwork/large/${listPokemonDetail.name}.jpg`}
                    alt=""
                    className="img-fluid img-thumbnail poke-img-dtl"
                  />
                </div>
              </div>
            </div>
            <div className="col-md dt-ttl-container">
              <h3 className="dt-poke-id">#{listPokemonDetail.id}</h3>
              <h2 className="display-3 dt-poke-name">
                {listPokemonDetail.name}
              </h2>
              <div className="row">
                <div className="col-md">
                  <h4 className="card-title">Type :</h4>
                  <h5>
                  { listPokemonDetail.types &&
                    listPokemonDetail.types.map((item, index) => {
                      return (
                        <span key={ index } className="badge dtl-poke" id={ `${ item.type.name }-type` }>
                          {item.type.name}
                        </span>
                      );
                    })}
                  </h5>
                </div>
                <div className="col-md">
                <h4 className="card-title">Description :</h4>
                  <h5>
                    <span className="badge dtl-poke" id="flying-type">
                      Height : {listPokemonDetail.height}
                    </span>
                    <span className="badge dtl-poke" id="flying-type">
                      Weight : {listPokemonDetail.weight}
                    </span>
                    <span className="badge dtl-poke" id="flying-type">
                      Base Experience: {listPokemonDetail.base_experience}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <h4 className="card-title">Abilities :</h4>
                  <h5>
                  { listPokemonDetail.abilities &&
                    listPokemonDetail.abilities.map((item, index) => {
                      return (
                          <span key={index} className="badge dtl-poke" id="water-type">
                            {item.ability.name}
                          </span>
                      );
                    })}
                  </h5>
                </div>
              </div>
            <div className="row">
              <div class="col align-self-end">

                </div>
                <div className="card poke-info">
                  <div className="card-body">
                  <h4 className="card-title">Statistics</h4>
                    {/* <h5 style={{ textTransform: "uppercase" }}> */}
                    {/* {listPokemonDetail.stats &&
                      listPokemonDetail.stats.map((item, index) => {
                        return (
                          <>
                          <span key={index} className="badge dtl-poke" id="water-type">
                          {item.stat.name} : {item.base_stat}
                          </span>
                          <ResponsiveContainer>
                          <RadarChart outerRadius={90} width={300} height={100} data={item.base_stat}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey={item.stat.name}/>
                          <PolarRadiusAxis angle={30} domain={[0, 150]} />
                          <Radar name = {listPokemonDetail.name} dataKey={item.stat.name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                          <Legend />
                          </RadarChart>
                          </ResponsiveContainer>
                          </>
                          );
                        })} */}
                    {/* </h5> */}
                    {
                      console.log(listPokemonDetail.stats)
                    }
                    <ResponsiveContainer width={450} minWeidth={100} minHeight="90%" height="90%">
                      <RadarChart outerRadius={90} width={300} height={100} data={listPokemonDetail.stats}>
                        <PolarGrid />
                            <PolarAngleAxis dataKey="stat.name" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name={listPokemonDetail.name} dataKey="base_stat" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8}/>
                            <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              {/* <Link to="/pokemonfavorite">
                <button>Go to My Pokemon</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
