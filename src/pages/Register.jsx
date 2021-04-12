import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterActions } from "../redux/actions/userAction";

const Register = () => {
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);
  console.log(selector);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <div style={{ margin: "100px" }}>
      <h1>Register</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(setRegisterActions(register, event));
        }}
      >
        <input
          placeholder="input your name"
          type="text"
          name="fullname"
          value={register.fullname}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <input
          placeholder="input your email"
          type="email"
          name="email"
          value={register.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <input
          placeholder="input your password"
          type="password"
          name="password"
          value={register.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
