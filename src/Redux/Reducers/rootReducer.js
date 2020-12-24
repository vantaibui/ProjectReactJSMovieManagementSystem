import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import UserReducer from "./UserReducer";
import AdminReducer from "./AdminReducer";
import TheaterReducer from "./TheaterReducer";

const RootReducer = combineReducers({
    MovieReducer: MovieReducer,
    UserReducer: UserReducer,
    AdminReducer: AdminReducer,
    TheaterReducer: TheaterReducer,
});

export default RootReducer;