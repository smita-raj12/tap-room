import React from "react";
import PropTypes from "prop-types";

function getPints(pints) {
    if (pints <= 0) {
        return "Out of stock!";
    }
    else {
        return pints;
    }
}

function KegDetail(props){
  const { keg } = props; 
  return (
    <React.Fragment>
        <h2>Keg Detail</h2>
        <h3>{keg.name}</h3> 
        <p> {keg.brand}</p>
        <p>{keg.price}</p>
        <p>{keg.flavor}</p>
        <p>{getPints(keg.pints)}</p>
        <hr/>
        <button disabled={keg.pints <= 0 ? true : false} onClick={ props.onClickingSell }>Sell</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell:PropTypes.func
};

export default KegDetail;