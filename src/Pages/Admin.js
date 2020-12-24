import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserList,
  deleteUser,
  updateUser,
  deleteMovie,
} from "../Redux/Actions/AdminAction";
import { fetchMovies } from "../Redux/Actions/MovieAction";
import { NavLink } from "react-router-dom";
import UpdateUser from "./UpdateUser";

var moment = require("moment"); // require
moment().format();

class Admin extends Component {
  deleteUser = (values) => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      deleteUser(values);
    }
  };

  editUser = (values) => {
    console.log(values);
    // this.props.dispatch(updateUser(values));
    this.props.history.push("/admin-updateUser");
    return <UpdateUser taiKhoan={values} />;
  };

  deleteMovie = (values) => {
    console.log(values);
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      deleteMovie(values);
    }
  };

  renderAdmin = () => {
    let { userList, movieList } = this.props;
    return (
      <section className="sideBar">
        <div className="sideBar__header">
          <div className="row">
            <div className="col-3 header-left">
              <a href="#">
                <img src="img/web-logo.png" alt="web-logo" />
                <span>SOFTWARE TECHNOLOGY</span>
              </a>
            </div>
            <div className="col-9 header-right">
              Công Nghệ Phần Mềm - Nhóm 8
            </div>
          </div>
        </div>
        <div className="sideBar__content">
          <div className="row">
            <div className="col-3 contentNav">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-user-tab"
                    data-toggle="pill"
                    href="#pills-user"
                    role="tab"
                    aria-controls="pills-user"
                    aria-selected="true"
                  >
                    <i className="fa fa-user-cog" />
                    Quản lý người dùng
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-movie-tab"
                    data-toggle="pill"
                    href="#pills-movie"
                    role="tab"
                    aria-controls="pills-movie"
                    aria-selected="false"
                  >
                    <i className="fa fa-film" />
                    Quản lý phim
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-9 contentTab">
              <div className="abc">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-user"
                    role="tabpanel"
                    aria-labelledby="pills-user-tab"
                  >
                    <NavLink exact to="/admin-addUser" className="btnAdd">
                      <i className="fa fa-plus" />
                      Thêm người dùng
                    </NavLink>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Stt</th>
                          <th>Tài khoản</th>
                          <th>Họ tên</th>
                          <th>Email</th>
                          <th>Số điện thoại</th>
                          <th>Mật khẩu</th>
                          <th>Loại người dùng</th>
                          <th>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList?.map((user, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{user.taiKhoan}</td>
                              <td>{user.hoTen}</td>
                              <td>{user.email}</td>
                              <td>{user.soDt}</td>
                              <td>{user.matKhau}</td>
                              <td>{user.maLoaiNguoiDung}</td>
                              <td>
                                <button
                                  onClick={() => {
                                    this.deleteUser(user.taiKhoan);
                                  }}
                                  className="btnDel"
                                >
                                  Xóa
                                </button>
                                <button
                                  className="btnEdit"
                                  onClick={() => {
                                    this.editUser(user.taiKhoan);
                                  }}
                                >
                                  Sửa
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-movie"
                    role="tabpanel"
                    aria-labelledby="pills-movie-tab"
                  >
                    <NavLink exact to="/admin-addMovie" className="btnAdd">
                      <i className="fa fa-plus" />
                      Thêm phim
                    </NavLink>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Stt</th>
                          <th>Mã nhóm</th>
                          <th>Mã phim</th>
                          <th>Tên phim</th>
                          <th>Bí danh</th>
                          <th>Ngày khỏi chiếu</th>
                          <th>Đánh giá</th>
                          <th>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {movieList?.map((movie, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{movie.maNhom}</td>
                              <td>{movie.maPhim}</td>
                              <td>{movie.tenPhim}</td>
                              <td>{movie.biDanh}</td>
                              <td>
                                {moment(movie.ngayKhoiChieu).format("ll")}
                              </td>
                              <td>{movie.danhGia}</td>
                              <td>
                                <button
                                  className="btnDel"
                                  onClick={() => {
                                    this.deleteMovie(movie.maPhim);
                                  }}
                                >
                                  Xóa
                                </button>
                                <button className="btnEdit">Sửa</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  render() {
    return <>{this.renderAdmin()}</>;
  }

  componentDidMount() {
    this.props.dispatch(fetchUserList());
    this.props.dispatch(fetchMovies());
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.AdminReducer.userList || {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDt: "",
      matKhau: "",
      maLoaiNguoiDung: "",
    },
    movieList: state.MovieReducer.movies,
  };
};

export default connect(mapStateToProps)(Admin);
