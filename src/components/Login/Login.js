import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import { AuthContext } from '../../App';
import axios from 'axios';

export const Login = () => {
  const { dispatch } = React.useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  // useEffect(() => {
  //   if(email.trim() && password.trim()) {

  //   }
  // })

  //Handle form state
  const [data, setData] = React.useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify({
      username: data.email,
      password: data.password
    }));
  
    const options = {
      headers: { 'Content-Type': 'application/json; charset=utf-8','Accept': 'application/json'}
    };

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });

    axios.post("http://172.17.0.1:8082/api/auth/signin",{username: data.email, password: data.password},options
    )
      .then(res => {
        //console.log(res.data);
        //if (res.ok) {
        if(res.status === 200){
         
          return res.data;//res.json()
        }
        throw res;
      })
      .then(resJson => {
      
        dispatch({
          type: "LOGIN",
          payload: resJson
        })
      })
      .catch(error => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText
        });
      });
  };

  
  return (
    <>
    
      <section className={styles.container}>
        <div className={styles.Login}>
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <p>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInputChange}
                placeholder="Username or Email"
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </p>

            <p className={styles.remember_me}>
              <label>
                <input type="checkbox" name="remember_me" id="remember_me" />
            Remember me on this computer
          </label>
            </p>




            <p className={styles.submit}>
              <button type="submit" disabled={data.isSubmitting}>
                {data.isSubmitting ? ("Loading...") : ("Login")}
              </button></p>

            <p className={styles.errorMessage}>
              {data.errorMessage && (
                <span className="form-error">{data.errorMessage}</span>
              )}
            </p>

          </form>
          <div className={styles.loginHelp}>
            <p >Forgot your password? <a className={styles.forgotPassword} href="index.html">Click here to reset it</a>.</p>
          </div>
        </div>

      </section>
     
    </>
  );
};


export default Login;
