import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Login = () => {

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
    <>
      <div className="container-fluid ttl-container regis-container" id="poison-type">
        <div className="container">
          <div className="row justify-content-center  ">
            <div className="col-md">
              <h2 className="display-5 title">
                Welcome Back !
              </h2>
              <p className="subtitle" style={{ color: "rgba(33, 34, 39, 0.1) !important" }}>
                Hello, Pokémon Master! Sign In so your Pokémon Friends
                could recognize you.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="card regis-card">
                <div className="row">
                    <div className="card-body">
                      <h5>
                        <span className="badge regis-alert" id="electric-type">
                        All Fields Are Required
                        </span>
                      </h5>
                      <form>
                        <div className="form-floating">
                          <input type="email" class="form-control" id="email" placeholder="ash@poke.info" required/>
                          <label for="name">Email</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" class="form-control" id="password" placeholder="Password" required/>
                          <label for="password">Password</label>
                        </div>
                        <div className="btn-form-container">
                          <FormButton type="submit">Login</FormButton>
                        </div>
                      </form>
                    </div>
                    <div className="regis-footer">
                      <div className="img-regis-container">
                        <img src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png" className="img-fluid" alt=""/>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card regis-card" style={{ textAlign: "end" }}>
                <div className="row">
                  <div className="card-body">
                    <h4 className="title" style = {{ textTransform: "" }}>
                      Just started your adventure?
                    </h4>
                    <p>
                      Don't worry, let's setup your first Pokémon Master account.
                      It's easy & free!
                    </p>
                    <div className="btn-form-container">
                      <Link to="/register">
                          <FormButton>
                            Register
                          </FormButton>
                      </Link>
                    </div>
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

export default Login;
