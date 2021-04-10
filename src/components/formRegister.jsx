import React from 'react';
import validateInfo from './validateInfo';
import useForm from './useForm';

const FormRegister = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validateInfo
      );
    return (
        <div>
              <form onSubmit={handleSubmit} noValidate>
                <label >Name: </label>
                <input 
                id='name'
                type="name"
                name="username" 
                placeholder="Name" 
                value={values.username} 
                onChange={handleChange}
                // ref={inputRef}
                />
                {errors.username && <p>{errors.username}</p>}
                <br/>
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
                <label >Re-Password: </label>
                <input
                 id='password2'
                type="password"
                name="password2" 
                 placeholder="Re-Password" 
                 value={values.password2} 
                 onChange={handleChange}
                //  ref={inputRef}
                 />
                 {errors.password2 && <p>{errors.password2}</p>}
                 <br/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormRegister;
