import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchTicketRoomInfo } from "../Redux/Actions/MovieAction";
import avatar from "../Asserts/Images/avatar.png";
import screen from "../Asserts/Images/screen.png";
import { userLogin } from "../Config/Setting";
import { userService } from "../Services/User/UserService";

var moment = require("moment");
moment().format();

class ShowTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dangSachGheDangDat: [],
    };
  }
  // Booking chair
  bookingChair = (seat) => {
    let index = this.state.dangSachGheDangDat.findIndex((seatSelected) => {
      return seatSelected.stt === seat.stt;
    });

    if (index !== -1) {
      this.state.dangSachGheDangDat.splice(index, 1);
    } else {
      this.state.dangSachGheDangDat.push(seat);
    }

    this.setState({
      dangSachGheDangDat: [...this.state.dangSachGheDangDat],
    });
  };
  // Render chair
  renderChair = (daDat, ghe) => {
    if (daDat) {
      return (
        <button disabled className="seat seatNotSelected">
          X
        </button>
      );
    } else {
      let cssSeatVIP;
      let cssSeatSelected;
      // console.log(this.state.dangSachGheDangDat);
      let index = this.state.dangSachGheDangDat.findIndex((gheDangDat) => {
        return gheDangDat.stt === ghe.stt;
      });
      // let index;
      if (index !== -1) {
        cssSeatSelected = "seatSelected";
      }
      if (ghe.loaiGhe === "Vip") {
        cssSeatVIP = "seatVIP";
      }
      return (
        <button
          onClick={() => {
            this.bookingChair(ghe);
          }}
          className={`seat ${cssSeatSelected} ${cssSeatVIP}`}
        >
          {ghe.stt}
        </button>
      );
    }
  };
  // Render chair list
  renderChairList = () => {
    let { showTimes } = this.props;
    return showTimes.danhSachGhe?.map((seat, index) => {
      return (
        <Fragment key={index}>{this.renderChair(seat.daDat, seat)}</Fragment>
      );
    });
  };

  // Ticket booking
  ticketBooking = () => {
    let infoTicketBooking = {
      maLichChieu: this.props.match.params.maLichChieu,
      danhSachVe: this.state.dangSachGheDangDat,
      taiKhoanNguoiDung: JSON.parse(localStorage.getItem(userLogin)).taiKhoan,
    };
    // console.log(infoTicketBooking);
    userService
      .ticketBooking(infoTicketBooking)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Render header
  renderHeader = () => {
    return (
      <header className="headerBooking">
        <nav className="navbar navbar-expand-md navbar-light">
          <button
            className="navbar-toggler hidden-md-up"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="headerLeft col-md-6">
            <div
              className="collapse navbar-collapse navbar--left"
              id="navbarText"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <p>
                    <span>01</span>CHỌN GHẾ &amp; THANH TOÁN
                  </p>
                </li>
                <li className="nav-item">
                  <p>
                    <span>02</span>KẾT QUẢ ĐẶT VÉ
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="headerRight col-md-6">
            {this.props.credentials ? (
              <>
                <p>
                  <img src={avatar} alt="avatar" />{" "}
                  {this.props.credentials.hoTen}
                </p>
              </>
            ) : (
              <>
                <p>
                  <img src={avatar} alt="avatar" /> Tên đăng nhập
                </p>
              </>
            )}
          </div>
        </nav>
      </header>
    );
  };

  // Render seat checkout
  renderSeatCheckOut = () => {
    let { showTimes } = this.props;
    return (
      <section
        className="seatCheckOut"
        key={showTimes.thongTinPhim.maLichChieu}
      >
        <div className="bookingLeft">
          <div
            className="backgroundColor"
            style={{
              backgroundImage: `url(${showTimes.thongTinPhim.hinhAnh})`,
              backgroundPosition: "center",
              backgroundRepeat: " no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="bookingRight">
          <div className="bookingRight__content">
            <div className="row top">
              <div className="topLeft col-sm-6 px-0">
                <img
                  className="img-fluid col-sm-1 col-1 px-0"
                  src={showTimes.thongTinPhim.hinhAnh}
                  alt="cgv"
                />
                <div className="leftIntro col-sm-11 col-11 px-0">
                  <p>
                    {showTimes.thongTinPhim.tenCumRap?.slice(0, 3)}
                    <span> {showTimes.thongTinPhim.tenCumRap?.slice(3)}</span>
                  </p>
                  <p>
                    - {showTimes.thongTinPhim.gioChieu} -
                    {showTimes.thongTinPhim.tenRap}
                  </p>
                </div>
              </div>
              <div className="topRight col-sm-6 px-0">
                <div className="rightItem">
                  <p>thời gian giữ ghế</p>
                  <p>
                    <span>5:00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <img className="img-fluid" src={screen} alt="screen" />
              <div className="listChair">
                {/* <p>Có lỗi khi giao tiếp với hệ thống rạp CGV. Xin vui lòng thử lại sau.</p> */}

                <div className="row listItem">
                  <div className="col-sm-12 chairRow">
                    {this.renderChairList()}
                  </div>
                </div>
              </div>
              <div className="noteChair">
                <div className="chairStatus">
                  <div className="statusT">
                    <i className="fa fa-couch" />
                    <p>Thường</p>
                  </div>
                  <div className="statusVIP">
                    <i className="fa fa-couch" />
                    <p>VIP</p>
                  </div>
                  <div className="statusDeluxe">
                    <i className="fa fa-couch" />
                    <p>Deluxe</p>
                  </div>
                  <div className="statusY">
                    <i className="fa fa-couch" />
                    <p>Ghế đang chọn</p>
                  </div>
                  <div className="statusN">
                    <i className="fa fa-couch" />
                    <p>Ghế đã có người chọn</p>
                  </div>
                </div>
                <div className="chairPosition">
                  <div className="chairCenter">
                    <span />
                    <span>Ghế trung tâm</span>
                  </div>
                  <div className="chairNice">
                    <span />
                    <span>Ghế Đẹp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  //   Render form
  renderFormBooking = () => {
    let { showTimes } = this.props;
    console.log(showTimes);
    return (
      <section className="checkOut">
        <div className="checkOut__content">
          <div className="total">
            <p>
              {this.state.dangSachGheDangDat
                .reduce((totalPrice, seat, index) => {
                  return (totalPrice += seat.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              đ
            </p>
          </div>
          <div className="infoFilm">
            <p>
              <span className="span--red">
                C{showTimes.thongTinPhim.maLichChieu}
              </span>
              {showTimes.thongTinPhim.tenPhim}
            </p>
            <p></p>
            <p>{showTimes.thongTinPhim.tenCumRap}</p>
            <p>
              {showTimes.thongTinPhim.ngayChieu} -
              {showTimes.thongTinPhim.gioChieu} -{" "}
              {showTimes.thongTinPhim.tenRap}
            </p>
            <p />
          </div>
          <div className="showTimesCode">
            <p>Mã lịch chiếu: {this.props.match.params.maLichChieu}</p>
          </div>
          <div className="row chair">
            <div className="itemChair col-sm-6">
              <span>
                Ghế:{" "}
                {this.state.dangSachGheDangDat.map((seat, index) => {
                  return (
                    <>
                      <span key={index}>{seat.tenGhe}</span>{" "}
                    </>
                  );
                })}
              </span>
              {/* <p>Ghế: </p>; */}
              {/* <img src={chair} alt="chair" /> */}
            </div>
            <div className="itemPrice col-sm-6">
              <p>
                {this.state.dangSachGheDangDat
                  .reduce((totalPrice, seat, index) => {
                    return (totalPrice += seat.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                đ
              </p>
            </div>
          </div>

          <div>
            <div className="userName">
              <input type="text" />
              {/* <label>Tên tài khoản</label> */}
              <label>Tài khoản: {this.props.credentials?.taiKhoan}</label>
            </div>
            <div className="btnBuyTicket">
              <button
                onClick={() => {
                  this.ticketBooking();
                }}
                className="btn"
              >
                Đặt vé
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  //   Render total
  renderTotal = () => {
    let { showTimes } = this.props;
    return (
      <>
        {this.renderHeader()}
        {this.renderSeatCheckOut()}
        {this.renderFormBooking()}
      </>
    );
  };

  render() {
    if (!localStorage.getItem("userLogin")) {
      alert("Vui long đăng nhập trước khi đặt vé!");
      return <Redirect to="/login" />;
    }
    return <>{this.renderTotal()}</>;
  }
  componentDidMount() {
    let maLichChieu = this.props.match.params.maLichChieu;
    this.props.dispatch(fetchTicketRoomInfo(maLichChieu));
  }
}

const mapStateToProps = (state) => {
  return {
    showTimes: state.MovieReducer.showTimes,
    credentials: state.UserReducer.credentials,
  };
};

export default connect(mapStateToProps)(ShowTime);
