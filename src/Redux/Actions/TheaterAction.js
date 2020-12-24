import { theaterService } from "../../Services/Theater/TheaterService";
import { createAction } from "./createAction";
import {
    FETCH_THEATERS,
    FETCH_THEATER_IN_THE_SYSTEM,
} from "../Types/TheaterType";

export const fetchTheaters = () => {
    return (dispatch) => {
        theaterService
            .fetchTheaterList()
            .then((res) => {
                // console.log(res.data);
                dispatch(createAction(FETCH_THEATERS, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const fetchTheaterInTheSys = (maHeThongRap) => {
    return (dispatch) => {
        theaterService
            .fetchTheaterInTheSystem(maHeThongRap)
            .then((res) => {
                dispatch(createAction(FETCH_THEATER_IN_THE_SYSTEM, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};