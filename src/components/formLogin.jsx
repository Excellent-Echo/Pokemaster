import React from 'react'
import validateInfo from './validateInfo';
import useForm from './useForm';

const FormLogin = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validateInfo
      );
    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <label >Email: </label>
                <input
                id='email'
                type="email"
                name="email" 
                placeholder="Email" 
                value={values.email} 
                onChange={handleChange}
                // ref={inputRef}
                />
                {errors.email && <p>{errors.email}</p>}
                <br/>
                <label >Password: </label>
                <input
                id='password'
                type="password"
                name="password" 
                placeholder="Password" 
                value={values.password} 
                onChange={handleChange}
                //  ref={inputRef}
                 />
                 {errors.password && <p>{errors.password}</p>}
                 <br/>
                 <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormLogin;
