import { types } from "../../actions/types"

export const reducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
};