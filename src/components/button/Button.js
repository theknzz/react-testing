import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, emitEvent }) => {

    if (!buttonText) return null;

    const submitEvent = () => {

        if (emitEvent)
            emitEvent();

    }

    return (
        <div>
            <button onClick={submitEvent} data-test="buttonComponent">
                {buttonText}
            </button>
        </div>
    );

}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func,
};

export default Button;