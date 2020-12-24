import { createAction } from "./createAction";
import { adminService } from "../../Services/Admin/AdminService";
import { FETCH_USER_LIST } from "../Types/AdminType";
import Axios from "axios";

export const fetchUserList = () => {
    return (dispatch) => {
        adminService
            .fetchUserList()
            .then((res) => {
                dispatch(createAction(FETCH_USER_LIST, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const addUser = (values) => {
    return adminService
        .addUser(values)
        .then((res) => {
            console.log(res);
            alert("Thêm người dùng thành công.");
            document.getElementById("btnReset").click();
        })
        .catch((err) => {
            alert("Đăng ký thất bại!");

            console.log(err);
        });
};

export const deleteUser = (values) => {
    return adminService
        .deleteUser(values)
        .then((res) => {
            alert("Đã xóa thành công người dùng: " + values);
            window.location.reload();
        })
        .catch((err) => {
            alert("Người dùng đã đặt vé, không thể xóa người dùng này!");
        });
};

export const updateUser = (values) => {
    return (dispatch) => {
        adminService
            .updateUser(values)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const findUser = (values) => {
    return adminService
        .findUser(values)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            alert("loi");
            console.log(err);
        });
};

export const addMovie = (values) => {
    return adminService
        .addMovie(values)
        .then((res) => {
            alert("Thêm phim thành công.");
            document.getElementById("btnReset").click();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteMovie = (values) => {
    return adminService
        .deleteMovie(values)
        .then((res) => {
            console.log(res);
            alert("Xoá thành công");
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
            alert("Xóa thất bại");
        });
};