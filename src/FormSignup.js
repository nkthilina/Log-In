import React from "react";
import UseForm from "./UseForm";
import validate from './validateInfo'
import './Form.css';

const FormSignup = ({submitForm}) => {
  const { handleChange, values, handleSubmit,  errors } = UseForm(submitForm, validate);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>
          Log In to your account
        </h1>
        <div className="form-inputs">
          {/* <label htmlFor="username" className="form-table">
            username
          </label> */}
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="email" className="form-table">
            email
          </label> */}
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="password" className="form-table">
            password
          </label> */}
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>} 
        </div>
        <button className="form-input-btn" type="submit">
          Continue
        </button>
        <span className="form-input-login">
          Don't have an account? <a href="$"> Sign Up</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
