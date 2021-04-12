import {
  USER_REGISTER,
  USER_LOGIN,
  USER_ERROR,
  USER_INFO,
} from "../actionsType/userType";

const initialState = {
  isLogged: true,
  data: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        dataRegister: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case USER_INFO:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
