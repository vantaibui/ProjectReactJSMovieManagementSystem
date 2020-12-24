import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpSchema } from "../Services/User/UserService";
import { fetchRegister } from "../Redux/Actions/UserAction";
import bgRegister from "../Asserts/Images/bgRegister.jpg";

class Register extends Component {
  handleSubmit = (values) => {
    console.log(values);
    this.props.history.push("/login");
    this.props.dispatch(fetchRegister(values));
  };
  renderForm = () => {
    return (
      <Formik
        // giá trị ban đầu nhận vào
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          hoTen: "",
          maNhom: "GP01",
          maLoaiNguoiDung: "KhachHang",
        }}
        // validation
        validationSchema={signUpSchema}
        // submit
        onSubmit={this.handleSubmit}
        // render
        render={(formikProps) => (
          <section className="formRegister">
            <div className="formRegister__content">
              <div className="row content_form">
                <div className="col-sm-6 formRegister_left">
                  <img src={bgRegister} alt="bgRegister" />
                </div>
                <div className="col-sm-6 formRegister_right">
                  <div className="right__content">
                    <h2 className="title">Đăng ký</h2>
                    <Form className="form">
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Tên tài khoản"
                          name="taiKhoan"
                        />
                        <ErrorMessage name="taiKhoan">
                          {(msg) => (
                            <div className="alert alert-danger">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="password"
                          placeholder="Mật khẩu"
                          name="matKhau"
                        />
                        <ErrorMessage name="matKhau">
                          {(msg) => (
                            <div className="alert alert-danger">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="email"
                          placeholder="Email"
                          name="email"
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <div className="alert alert-danger">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Số điện thoại"
                          name="soDt"
                        />
                        <ErrorMessage name="soDt">
                          {(msg) => (
                            <div className="alert alert-danger">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Họ tên"
                          name="hoTen"
                        />
                        <ErrorMessage name="hoTen">
                          {(msg) => (
                            <div className="alert alert-danger">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          component="select"
                          name="maNhom"
                          className="form-control"
                        >
                          <option className="optionItem">GP01</option>
                          <option className="optionItem">GP02</option>
                          <option className="optionItem">GP03</option>
                          <option>GP04</option>
                          <option>GP05</option>
                          <option>GP06</option>
                          <option>GP07</option>
                          <option>GP08</option>
                          <option>GP09</option>
                          <option>GP10</option>
                        </Field>
                      </div>
                      <div className="buttonRegister">
                        <button className="btnSubmit" type="submit">
                          Đăng ký
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      />
    );
  };
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default Register;
