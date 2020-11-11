import React from "react";
import PropTypes from "prop-types"

const Headline = ({ header, desc }) => {

    // if props.header isn't passed render nothing
    if (!header) return null;

    return (
        <div data-test="headlineComponent">
            <h1 data-test="header">{header}</h1>
            <p data-test="desc">{desc}</p>
        </div>
    );
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    // Complex example for working with PropTypes (not used in component)
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool,
    }))
}

export default Headline;