/**
 * @fileOverview file contains utility functions to the project
 * @author Joaquim Santos
 */

import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import { reducer as rootReducer } from "../src/store/reducer/posts/reducer";
import { middlewares } from "../src/createStore";

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

/**
 * Function creates a test redux store
 * @param initialState
 * @returns {ReduxStore<*|*[], AnyAction> & {dispatch: ThunkDispatch<{}, undefined, AnyAction>}}
 */
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};