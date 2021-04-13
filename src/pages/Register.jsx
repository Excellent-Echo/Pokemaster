import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterActions } from "../redux/actions/userAction";

import { Link } from "react-router-dom";

import styled from "styled-components";

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

  const FormButton = styled.button`
    cursor: pointer;
    background: #FFCB77;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #FFCB77;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #212227;
    font-weight: bold;
    width: 100%;

    &:hover {
      background-color: #F4F4F6;
      color: #212227;
    }
  `;

  return (
    // <div style={{ margin: "100px" }}>
    //   <h1>Register</h1>
    //   <form
    //     onSubmit={(event) => {
    //       event.preventDefault();
    //       dispatch(setRegisterActions(register, event));
    //     }}
    //   >
    //     <input
    //       placeholder="input your name"
    //       type="text"
    //       name="fullname"
    //       value={register.fullname}
    //       onChange={(e) => handleChange(e)}
    //       required
    //     />
    //     <br />
    //     <input
    //       placeholder="input your email"
    //       type="email"
    //       name="email"
    //       value={register.email}
    //       onChange={(e) => handleChange(e)}
    //       required
    //     />
    //     <br />
    //     <input
    //       placeholder="input your password"
    //       type="password"
    //       name="password"
    //       value={register.password}
    //       onChange={(e) => handleChange(e)}
    //       required
    //     />
    //     <br />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>

    <>
      <div className="container-fluid ttl-container regis-container" id="normal-type">
        <div className="container">
          <div className="row justify-content-center  ">
            <div className="col-md">
              <h2 className="display-5 title">
                Wanna be a Pokémon Master ?
              </h2>
              <p className="subtitle" style={{ color: "rgba(33, 34, 39, 0.1) !important" }}>
                Looks like you're new. Let's Create Your Pokémon Master Account!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="card regis-card">
                <div className="row">
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5>
                        <span className="badge regis-alert" id="electric-type">
                        All Fields Are Required
                        </span>
                      </h5>
                      <form onSubmit={(event) => { event.preventDefault(); dispatch(setRegisterActions(register, event)); }}>
                        <div className="form-floating">
                          <input type="text" class="form-control" id="name" placeholder="Ex: Ash Ketchum" value={register.fullname} onChange={(e) => handleChange(e)} required/>
                          <label for="name">Your Name</label>
                        </div>
                        <div className="form-floating">
                          <input type="email" class="form-control" id="email" placeholder="ash@poke.info"  value={register.email} onChange={(e) => handleChange(e)} required/>
                          <label for="name">Email</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" class="form-control" id="password" placeholder="Password"  value={register.password} onChange={(e) => handleChange(e)} required/>
                          <label for="password">Password</label>
                        </div>
                        <div className="btn-form-container">
                          <FormButton type="submit">Register</FormButton>
                        </div>
                      </form>
                    </div>
                    <div className="regis-footer">
                      <hr/>
                      <div className="row">
                        <div className="col-md">
                          <h5>
                            Already a Pokémon Master ?
                          </h5>
                          <h5>
                            <span className="badge regis-alert" id="fairy-type">
                              <Link className="regis-link" to="/login">
                                Sign In Here
                              </Link> 
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 img-regis-container">
                    <img src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-signup.png" className="img-fluid" alt=""/>
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

export default Register;
