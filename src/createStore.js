import { createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";
import RootReducer from './store/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(RootReducer);