import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import './violet.jpeg';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  <img className='form-img' src='img/img-2.svg' alt='ZD' />

  return (
    
    <div className='form-content-right'>
            <p id="login-welcome"> Way to ZD!</p>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          JOIN OUR ZD FAMILY
        </h1>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
            endIcon={<PersonIcon />}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Email Address'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
            endIcon={<VisibilityOffIcon />}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          <h6>Submit</h6>
        </button>
      </form>
    </div>
  );
};

export default FormSignup;