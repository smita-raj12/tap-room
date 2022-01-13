import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3> 
        <p> {props.brand}</p>
        <p>{props.price}</p>
        <p>{props.flavor}</p>
        <p>{props.pints}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    flavor:PropTypes.string.isRequired,
    pints:PropTypes.number.isRequired,
    id: PropTypes.string, 
    whenKegClicked: PropTypes.func 
};

export default Keg;