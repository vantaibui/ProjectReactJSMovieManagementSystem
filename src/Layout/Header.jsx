import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../Asserts/Images/web-logo.png";
import avatar from "../Asserts/Images/avatar.png";
import register from "../Asserts/Images/register.png";

class Header extends Component {
  renderHeader = () => {
    return (
      <>
        {/* header */}
        <header className="header">
          <nav className="navbar navbar-expand-sm">
            <div className="header-left col-xl-3 col-lg-2 col-md-2 col-sm-6 col-6">
              <NavLink
                className="navbar-brand"
                to="/"
                exact
                activeStyle={{ color: "warning" }}
              >
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <button
              className="navbar-toggler hidden-sm-up col-6"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src="./img/button-header.png" alt="button-header" />
            </button>
            <div
              className="header-center col-xl-6 col-lg-6 col-md-7"
              id="navbarSupportedContent"
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#showTimes">
                      Lịch chiếu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#movieTheater">
                      Cụm rạp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#news">
                      Tin Tức
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#appMobile">
                      Ứng dụng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right col-xl-3 col-lg-4 col-md-5 col-sm-6 px-0">
              {this.props.credentials ? (
                <>
                  <div className="userInfo">
                    <span className="nameUser">
                      <img src={avatar} alt="avatar" />
                      {this.props.credentials.hoTen}
                    </span>
                    <button
                      className="btnLogout"
                      onClick={() => {
                        this.logout();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="avatar">
                    <NavLink
                      exact
                      activeStyle={{ color: "warning" }}
                      to="/login"
                    >
                      <img src={avatar} alt="avatar" />
                      <span>Đăng Nhập</span>
                    </NavLink>
                  </div>
                  <div className="location">
                    <NavLink exact to="/register">
                      <img src={register} alt="location" />
                      <span>Đăng ký</span>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </nav>
        </header>
      </>
    );
  };
  render() {
    return <>{this.renderHeader()}</>;
  }
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
}

const mapStateToProps = (state) => {
  return {
    credentials: state.UserReducer.credentials,
  };
};

export default connect(mapStateToProps)(Header);
