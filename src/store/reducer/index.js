import { combineReducers } from "redux";
import { reducer as posts } from "./posts/reducer"

export default combineReducers({
    posts,
})
