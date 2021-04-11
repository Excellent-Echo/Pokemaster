import {
        FETCH_LOGIN,
        FETCH_REGISTER
  } from "../actionsType/loginType";
  
  const initialState = {
    dataUserApi: [],
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LOGIN:
        return {
          ...state,
          dataUserApi: action.payload,
        };
      case FETCH_REGISTER:
        return {
          ...state,
          dataUserApi: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  