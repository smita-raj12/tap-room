import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p>name</p>
        <input
          type='text'
          name='name'
          placeholder='Name' /><br />
        <p>Brand</p>  
        <input
          type='text'
          name='brand'
          placeholder='Brand' /><br/>
        <p>Price</p>  
        <input
          type='number'
          name='price'
          defaultValue={124}
          placeholder='Price' /><br/>
        <p>Flavor</p>  
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' /><br/>  
        <p>Pints</p>  
        <input
          type='number'
          name='pints'
          defaultValue={124}
          placeholder='Pints' /><br/>  
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;