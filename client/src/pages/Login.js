import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/Login.css';


function Login() {
    const [action, setAction] = useState('Login');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validateLogin = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleLoginSubmit = (values, { setSubmitting }) => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Login successful');
          setLoginSuccessful(true);
          // Logic to redirect to a dashboard.
        } else {
          response.json().then((data) => {
            console.error('Login failed:', data.message);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="login">
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <Formik initialValues={initialValues} validate={validateLogin} onSubmit={handleLoginSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="input">
              <Field type="email" name="email" placeholder="Email Id" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="submit-container">
              <button type="submit" className="submit">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {loginSuccessful && <div>Login Successful!</div>}
    </div>
  );
}

export default Login;
