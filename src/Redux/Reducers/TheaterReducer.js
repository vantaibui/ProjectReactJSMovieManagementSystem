import {
    FETCH_THEATERS,
    FETCH_THEATER_IN_THE_SYSTEM,
} from "../Types/TheaterType";

let initialState = {
    theaters: [],
    theaterInTheSys: [],
};

const TheaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_THEATERS:
            {
                state.theaters = action.payLoad;
                return {...state };
            }
        case FETCH_THEATER_IN_THE_SYSTEM:
            {
                state.theaterInTheSys = action.payLoad;
                return {...state };
            }
        default:
            return state;
    }
};

export default TheaterReducer;