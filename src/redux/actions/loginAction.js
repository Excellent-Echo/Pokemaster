import {
    FETCH_LOGIN,
    FETCH_REGISTER
  } from "../actionsType/loginType";
  import axios from "../../Api/userApi";
  
  const fetchLogin = (id, email, password) => async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: `/Users/${id}?${email}?${password}`
      });
      console.log("ini response", response);
      dispatch({
        type: FETCH_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchRegister = (id, name, email, password) => async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: `/Users/${id}?${name}?${email}?${password}`,
      });
      // console.log("ini response detail", response);
      dispatch({
        type: FETCH_REGISTER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const loginAction = {
    fetchLogin,
    fetchRegister,
  };
  
  export default loginAction;
  