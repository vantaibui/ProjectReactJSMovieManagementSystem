import { FETCH_CREDENTIALS } from "../Types/UserType";

let initialState = {
    credentials: null,
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDENTIALS:
            {
                state.credentials = action.payLoad;
                return {...state };
            }
        default:
            return state;
    }
};

export default UserReducer;