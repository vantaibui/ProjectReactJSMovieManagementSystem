import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import bgRegister from "../Asserts/Images/bgRegister.jpg";

export default class UpdateUser extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };
  renderForm = () => {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          hoTen: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "",
          maLoaiNguoiDung: "",
        }}
        onSubmit={this.handleSubmit}
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
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="password"
                          placeholder="Mật khẩu"
                          name="matKhau"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="email"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Số điện thoại"
                          name="soDt"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Họ tên"
                          name="hoTen"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          component="select"
                          name="maLoaiNguoiDung"
                        >
                          <option value="KhachHang">Khách hàng</option>
                          <option value="QuanTri">Quản trị</option>
                        </Field>
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          component="select"
                          name="maNhom"
                          className="form-control"
                        >
                          <option>GP01</option>
                          <option>GP02</option>
                          <option>GP03</option>
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
                          Sửa
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
    let { taiKhoan } = this.props;
    console.log(taiKhoan);
    return <div>{this.renderForm()}</div>;
  }
}
