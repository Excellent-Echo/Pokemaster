import React from 'react'
import { withRouter } from "react-router-dom";
import FormRegister from '../components/formRegister';


const Register = ({submitForm}) => {
    return (
        <>
        <div className="container">
            <h1>Register</h1>
            <FormRegister submitForm={submitForm} />
        </div>
        </>
    )
}

export default withRouter(Register);
