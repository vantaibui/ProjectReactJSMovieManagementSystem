import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTheaters } from "../Redux/Actions/TheaterAction";
import facebook from "../Asserts/Images/facebook.png";
import zalo from "../Asserts/Images/zalo.png";
import android from "../Asserts/Images/android.png";
import apple from "../Asserts/Images/apple.png";
import zion from "../Asserts/Images/zion-logo.jpg";
import notification from "../Asserts/Images/notification.png";

class Footer extends Component {
  renderFooter = () => {
    let { theaterList } = this.props;
    return (
      <>
        {/* footer */}
        <footer className="footer">
          <div className="footer__content">
            <div className="row footer-top">
              <div className="col-lg-4 col-sm-6 top-left">
                <p>TIX</p>
                <div className="row">
                  <div className="col-lg-6 left-item">
                    <a>FAQ</a>
                    <a>Brand Guidelines</a>
                  </div>
                  <div className="col-lg-6 left-item">
                    <a>Thỏa thuận sử dụng</a>
                    <a>Chính sách bảo mật</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 top-center">
                <p>ĐỐI TÁC</p>
                <div className="companyItem">
                  {theaterList?.map((theater, index) => {
                    return (
                      <a key={index}>
                        <img src={theater.logo} alt={theater.maHeThongRap} />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="row col-lg-4 col-sm-6 top-right">
                <div className="col-lg-6 right-item">
                  <p>MOBILE APP</p>
                  <a title="Apple App">
                    <img src={apple} alt="apple-logo" />
                  </a>
                  <a title="Android App">
                    <img src={android} alt="android-logo" />
                  </a>
                </div>
                <div className="col-lg-6 right-item">
                  <p>SOCIAL</p>
                  <a title="Facebook social">
                    <img src={facebook} alt="facebook-logo" />
                  </a>
                  <a title="Zalo social">
                    <img src={zalo} alt="zalo-logo" />
                  </a>
                </div>
              </div>
            </div>
            <hr className="footer-hr" />
            <div className="row footer-bottom">
              <div className="col-lg-1 col-md-1 col-sm-12 bottom-left">
                <img src={zion} alt="zion-logo" />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 bottom-center">
                <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br /> đăng
                  ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                  hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email:
                  <a href="mailto:vantaibui92@gmail.com">support@tix.vn</a>
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 bottom-right">
                <a href="#" target="_blank">
                  <img src={notification} alt="notification" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  render() {
    return <>{this.renderFooter()}</>;
  }
  componentDidMount() {
    this.props.dispatch(fetchTheaters());
  }
}

const mapStateToProps = (state) => {
  return {
    theaterList: state.TheaterReducer.theaters,
  };
};

export default connect(mapStateToProps)(Footer);
