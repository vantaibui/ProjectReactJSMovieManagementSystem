import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLogin } from "../Redux/Actions/UserAction";

class Login extends Component {
  renderForm = () => {
    return (
      <Formik
      // giá trị ban đầu
      initialValues={{
        taiKhoan: "",
        matKhau: "",
      }}
      // submit
      onSubmit={(values) => {
          console.log(values);
          this.props.history.push("/");
          this.props.dispatch(fetchLogin(values));
        }}
        // render
        render={({ handleChange }) => (
          <section className="formLogin">
            <div className="formLogin__content">
              <div className="signUp">
                <Form className="signUp_form">
                  <h2>Đăng nhập</h2>
                  <div className="form-group">
                    <Field
                      onChange={handleChange}
                      type="text"
                      name="taiKhoan"
                      placeholder="Tên tài khoản"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      onChange={handleChange}
                      type="password"
                      name="matKhau"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="form-group">
                    <NavLink exact to="/register" className="btnRegister">
                      Tạo tài khoản
                    </NavLink>
                  </div>
                  <div className="btnSinUp">
                    <button type="submit" className="btnSubmit">
                      Đăng nhập
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </section>
        )}
      />
    );
  };
  render() {
    return <div> {this.renderForm()} </div>;
  }
}

export default connect()(Login);
