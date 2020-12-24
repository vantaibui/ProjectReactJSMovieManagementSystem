import Axios from "axios";
import { domain } from "../../Config/Setting";

export class TheaterService {
    fetchTheaterList = () => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyRap/LayThongTinHeThongRap`,
        });
    };
    fetchTheaterInTheSystem = (maHeThongRap) => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
        });
    };
}

export const theaterService = new TheaterService();