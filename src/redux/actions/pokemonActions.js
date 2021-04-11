import {
  FETCH_POKEMON,
  FETCH_POKEMON_DETAIL,
  ADD_POKEMON_FAVORITE,
} from "../actionsType/pokemonType";
import axios from "../../Api/pokemonApi";

const fetchPokemon = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "/pokemon?limit=100&offset=200",
    });
    console.log("ini response", response);
    dispatch({
      type: FETCH_POKEMON,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchPokemonDetail = (name) => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: `/pokemon/${name}`,
    });
    // console.log("ini response detail", response);
    dispatch({
      type: FETCH_POKEMON_DETAIL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const pokemonFavorite = (favoriteObj) => (dispatch) => {
  try {
    dispatch({
      type: ADD_POKEMON_FAVORITE,
      payload: favoriteObj,
    });
  } catch (error) {
    console.log(error);
  }
};

const pokemonAction = {
  fetchPokemon,
  fetchPokemonDetail,
};

export default pokemonAction;
