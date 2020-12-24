import { domain, token } from "../../Config/Setting";
import Axios from "axios";
import * as yup from "yup";

// Call api
export class UserService {
    login = (userLogin) => {
        return Axios({
            method: "POST",
            url: `${domain}/QuanLyNguoiDung/DangNhap`,
            data: userLogin,
        });
    };
    register = (userLogin) => {
        return Axios({
            method: "POST",
            url: `${domain}/QuanLyNguoiDung/DangKy`,
            data: userLogin,
        });
    };
    ticketBooking = (thongTinDatVe) => {
        return Axios({
            method: "POST",
            url: `${domain}/QuanLyDatVe/DatVe`,
            data: thongTinDatVe,
            headers: {
                // token === accessToken
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };
    fetchUserList = () => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
        });
    };
}
// Validation
export const signUpSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tài khoản!"),
    matKhau: yup.string().required("Vui nhập mật khẩu!"),
    email: yup
        .string()
        .required("Vui lòng nhập email!")
        .email("Email không hợp lệ!"),
    soDt: yup
        .string()
        .required("Vui lòng nhập số điện thoại!")
        .matches(/^[0-9]+$/),
    hoTen: yup.string().required("Vui lòng nhập họ và tên!"),
    maNhom: yup.string().required("vui lòng chọn nhóm!"),
});

export const userService = new UserService();