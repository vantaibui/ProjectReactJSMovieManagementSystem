import Axios from "axios";
import { domain, token } from "../../Config/Setting";

export class AdminService {
    fetchUserList = () => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
        });
    };
    // Người dùng
    addUser = (taiKhoan) => {
        return Axios({
            method: "POST",
            url: `${domain}/QuanLyNguoiDung/ThemNguoiDung`,
            data: taiKhoan,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };
    deleteUser = (taiKhoan) => {
        return Axios({
            method: "DELETE",
            url: `${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            data: taiKhoan,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };
    updateUser = (taiKhoan) => {
        return Axios({
            method: "PUT",
            url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            data: taiKhoan,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };
    findUser = (values) => {
        console.log(values);
        return Axios({
            method: "GET",
            url: `${domain}//QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${values}`,
        });
    };
    // Phim
    addMovie = (values) => {
        return Axios({
            method: "POST",
            url: `${domain}/QuanLyPhim/ThemPhim`,
            data: values,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };

    deleteMovie = (values) => {
        return Axios({
            method: "DELETE",
            url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${values}`,
            data: values,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };
}

export const adminService = new AdminService();