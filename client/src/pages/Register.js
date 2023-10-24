import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/Register.css';

function Register() {
  const [action, setAction] = useState('Register');

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values) => {
    const errors = {};

    if (action === 'Register') {
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
      }
    }

    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log('Registration successful');
          setAction('Login');
        } else {
          response.json().then((data) => {
            console.error('Registration failed:', data.message);
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
    <div className="register">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            {action === 'Register' && (
              <div className="input">
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
            )}

            <div className="input">
              <Field type="email" name="email" placeholder="Email Id" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            {action === 'Register' && (
              <div className="input">
                <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>
            )}

            {action === 'Register' ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
              </div>
            )}

            <div className="submit-container">
              <button
                type="submit"
                className={action === 'Login' ? 'submit gray' : 'submit'}
                onClick={() => setAction('Register')}
                disabled={isSubmitting}
              >
                Register
              </button>
              <button
                type="submit"
                className={action === 'Register' ? 'submit gray' : 'submit'}
                onClick={() => setAction('Login')}
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
