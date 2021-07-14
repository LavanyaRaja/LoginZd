import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <p id="login-welcome"> Way to ZD!</p>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          STEP INTO YOUR DREAMS
        </h1>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
            InputAdornment={<PersonIcon />}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Password'
            value={values.password2}
            onChange={handleChange}
            endIcon={< VisibilityOffIcon />}
          />
          {errors.password2 && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          <h6>Login</h6>
          <span className='form-input-login'>
            <a href='#'>Create Account</a>
            <ul>
            <a href='#'>Forgot Password?</a>
            </ul>
          </span>
        </button>
      </form>
    </div>
  );
};

export default FormLogin;