import { USER_REGISTER, USER_LOGIN } from "../actionsType/userType";
import axios from "../../APIs/userApi";

export const setRegisterActions = (values, event) => async (dispatch) => {
  console.log("ini values", values);
  console.log("ini event", event);

  try {
    const register = await axios({
      method: "post",
      url: "/users",
    });
    console.log("ini register", register);
    dispatch({
      type: USER_REGISTER,
      payload: register.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const setLoginActions = () => async (dispatch) => {
  try {
    const login = await axios({
      method: "get",
      url: "/users",
    });
    // console.log("ini login", login);
    dispatch({
      type: USER_LOGIN,
      payload: login.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const userAction = {
  setLoginActions,
};

export default userAction;
