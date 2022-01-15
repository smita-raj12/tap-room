import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
    
    return (
        <React.Fragment>
            <hr/>
            <p>{props.msg}</p>
            {props.kegList.map((keg) =>
                
                <Keg
                    whenKegClicked = { props.onKegSelection }
                    name={keg.name}
                    id={keg.id}
                    key={keg.id}
                />
            )}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func,
    msg:PropTypes.string
};

export default KegList;

