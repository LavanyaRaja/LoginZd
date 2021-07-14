import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {TextField} from '@material-ui/core'

const FormName = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, dropdown, setDropdown } = useForm(
    submitForm,
    validate  );


  return (
    <div className='form-content-right'>
      <p id="login-welcome"> Way to ZD!</p>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          CHOOSE YOUR ZILLION FAMILY NAME
        </h1>
        <div className='dropdown'>
        <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
          <option value="unborn egg">Unborn egg</option>
          <option value="neonate achiever">Neonate Achiever</option>
          <option value="tenderfoot activist">Tenderfoot Activist</option>
          <option value="human dynamo">Human Dynamo</option>
          <option value="stardom dreamer">Stardom Dreamer</option>
          <option value="i'm tireless seeker">I'm Tireless Seeker</option>
          <option value="brobdingnagian engine">Brobdingnagian Engine</option>
          <option value="zillionaire">Zillionaire</option>
          <option value="human dynamo">Human Dynamo</option>
        </select>
        </div>
        <div className="gender">
          <label>GENDER </label>
            <input type="radio" value="male" name="gender" /> Male 
            <input type="radio" value="female" name="gender" /> Female
        </div>
        <h1>EMAIL ADDRESS/PHONE NUMBER
        <TextField />
        </h1>
        <button className='form-input-btn' type='submit'>
          <h6>Update</h6>
        </button>
      </form>
    </div>
  );
};

export default FormName;