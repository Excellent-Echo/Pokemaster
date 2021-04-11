import loginReducer from "./loginReducers";
import pokemonReducer from "./pokemonReducers";

const rootReducers = {
  pokemon: pokemonReducer,
  userLogin : loginReducer
};

export default rootReducers;
