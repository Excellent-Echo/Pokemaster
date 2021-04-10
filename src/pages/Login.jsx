import React, {useState} from 'react'
import { withRouter } from "react-router-dom"; 
import FormSuccess from '../components/formSuccess';
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
            <FormSuccess />
          )}
      </div>
      </>
    );
  };

export default withRouter(Login);
