import {
    FETCH_MOVIES,
    FETCH_MOVIE_DETAIL,
    FETCH_TICKET_ROOM_INFO,
} from "../Types/MovieType";

let initialState = {
    movies: [],
    movieDetail: null,
    showTimes: {
        thongTinPhim: {},
        danhSachChe: [],
    },
};

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            {
                state.movies = action.payLoad;
                return {...state };
            }
        case FETCH_MOVIE_DETAIL:
            {
                state.movieDetail = action.payLoad;
                return {...state };
            }
        case FETCH_TICKET_ROOM_INFO:
            {
                state.showTimes = action.payLoad;
                return {...state };
            }
        default:
            return state;
    }
};

export default MovieReducer;