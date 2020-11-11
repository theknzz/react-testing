/**
 * @fileOverview file contains utility functions to the project
 * @author Joaquim Santos
 */

/**
 * Function finds element of component, by data-test value
 * @param component
 * @param data-test attribute
 * @returns element with the respective data-test
 */
export const findByTestAtrr = (component, attr) => {
    const wrapper =  component.find(`[data-test='${attr}']`);
    return wrapper;
}