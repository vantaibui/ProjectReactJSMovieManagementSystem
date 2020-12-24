import { movieService } from "../../Services/Movie/MovieService";
import { createAction } from "./createAction";
import {
    FETCH_MOVIE_DETAIL,
    FETCH_MOVIES,
    FETCH_TICKET_ROOM_INFO,
} from "../Types/MovieType";

export const fetchMovies = () => {
    return (dispatch) => {
        movieService
            .fetchMovieList()
            .then((res) => {
                console.log(res.data)
                dispatch(createAction(FETCH_MOVIES, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const fetchMovieDetail = (maPhim) => {
    return (dispatch) => {
        movieService
            .fetchMovieDetail(maPhim)
            .then((res) => {
                dispatch(createAction(FETCH_MOVIE_DETAIL, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const fetchTicketRoomInfo = (maLichChieu) => {
    return (dispatch) => {
        movieService
            .fetchTicketRoomInfo(maLichChieu)
            .then((res) => {
                dispatch(createAction(FETCH_TICKET_ROOM_INFO, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};