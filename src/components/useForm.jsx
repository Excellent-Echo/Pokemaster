import { useState, useEffect } from 'react';
import axios from "axios";

const useForm = (callback, validate) => {
  // const [userLogin, setUserLogin] = useState();
  const [values, setValues] = useState(
    {
      username: '',
      email: '',
      password: '',
      password2: ''
      }
      );
      // useEffect(() =>{
      //         const fetchData = async ()=>{
      //             try {
      //                 const conn = await axios({
      //                      method:"GET",
      //                      url: `Users`
      //                  });
      //                 setUserLogin(conn.data.name, conn.data.id);
      //              } catch (error) {
      //                 console.log(error)
      //             }
      //         };
      //     fetchData()
      //     return fetchData;
      // }, []);
      
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;