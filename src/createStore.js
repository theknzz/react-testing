import { createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";
import RootReducer from './store/reducer'

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer);