import React, {useState} from 'react'
import { withRouter } from "react-router-dom"; 
import { Redirect } from 'react-router-dom';
import FormLogin from '../components/formLogin';


const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
      <div className="container">
       <h1>Login</h1>
          {!isSubmitted ? (
            <FormLogin submitForm={submitForm} />
          ) : (
            <Redirect to="/" />
          )}
      </div>
      </>
    );
  };

export default withRouter(Login);
