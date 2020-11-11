/**
 * @fileOverview file contains utility functions to the project
 * @author Joaquim Santos
 */

import checkPropTypes from "check-prop-types";

/**
 * Function finds element of component, by data-test value
 * @param component
 * @param attr: data-test attribute
 * @returns {Object} element with the respective data-test
 */
export const findByTestAtrr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}

/**
 * Function matches the expected propTypes to the component's propTypes
 * @param component
 * @param expectedProps
 * @returns {string} error string
 */
export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
};