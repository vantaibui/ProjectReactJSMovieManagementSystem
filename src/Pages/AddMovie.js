import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import bgRegister from "../Asserts/Images/bgRegister.jpg";
import { userLogin } from "../Config/Setting";
import { Redirect } from "react-router-dom";
import { addMovie } from "../Redux/Actions/AdminAction";

export default class AddMovie extends Component {
  handleSubmit = (values) => {
    console.log(values);
    this.props.dispatch(addMovie(values));
  };

  renderForm = () => {
    return (
      <Formik
        initialValues={{
          maPhim: 0,
          tenPhim: "",
          biDanh: "",
          trailer: "",
          hinhAnh: "",
          moTa: "",
          ngayKhoiChieu: "",
          danhGia: 0,
          maNhom: "GP01",
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
                          placeholder="maPhim"
                          name="maPhim"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Tên phim"
                          name="tenPhim"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Bí danh"
                          name="biDanh"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Trailer"
                          name="trailer"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="file"
                          placeholder="Hình ảnh"
                          name="hinhAnh"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Mô tả"
                          name="moTa"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Ngày khởi chiếu"
                          name="ngayKhoiChieu"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          onChange={formikProps.handleChange}
                          type="text"
                          placeholder="Đánh giá"
                          name="danhGia"
                        />
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
                          Thêm
                        </button>
                        <button
                          style={{ display: "none" }}
                          className="btnReset"
                          id="btnReset"
                          type="reset"
                        >
                          Reset
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
    if (!localStorage.getItem(userLogin)) {
      alert("Vui lòng đăng nhập!");
      return <Redirect to="/login" />;
    }
    return <div>{this.renderForm()}</div>;
  }
}
