import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
    return (
        <React.Fragment>
            <hr/>
            <h2>Click the name to see the details</h2>
            {props.KegList.map((keg) =>
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
    KegList: PropTypes.array,
    onKegSelection: PropTypes.func
};

export default KegList;

