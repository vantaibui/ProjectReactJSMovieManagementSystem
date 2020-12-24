import { userService } from "../../Services/User/UserService";
import { createAction } from "./createAction";
import { FETCH_CREDENTIALS } from "../Types/UserType";
import { token, userLogin } from "../../Config/Setting";

export const fetchLogin = (values) => {
    return (dispatch) => {
        userService
            .login(values)
            .then((res) => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));

                localStorage.setItem(userLogin, JSON.stringify(res.data));

                localStorage.setItem(token, res.data.accessToken);
            })
            .catch((err) => {
                alert("Đăng nhập thất bại!");

                console.log(err);
            });
    };
};

export const fetchRegister = (values) => {
    return userService
        .register(values)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};