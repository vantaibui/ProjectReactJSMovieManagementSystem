import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMovieDetail } from "../Redux/Actions/MovieAction";
import star from "../Asserts/Images/star1.png";
import reviewer from "../Asserts/Images/reviewer.png";
import ticket from "../Asserts/Images/movieTicket.png";
import like from "../Asserts/Images/like.png";
import comment from "../Asserts/Images/comment.png";
import playVideo from "../Asserts/Images/playVideo.png";

// Moment js
var moment = require("moment");
moment().format();

class MovieDetail extends Component {
  // Render rating
  renderRating = (rating) => {
    if (rating > 5) {
      rating = 5;
    }
    for (let i = 0; i < rating; i++) {
      let imgStart;
      if (rating === 0) {
        imgStart = <p></p>;
      } else if (rating === 1) {
        imgStart = (
          <p>
            <img src={star} alt="star1" />
          </p>
        );
      } else if (rating === 2) {
        imgStart = (
          <p>
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
          </p>
        );
      } else if (rating === 3) {
        imgStart = (
          <p>
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
          </p>
        );
      } else if (rating === 4) {
        imgStart = (
          <p>
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
          </p>
        );
      } else if (rating === 5) {
        imgStart = (
          <p>
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
            <img src={star} alt="star1" />
          </p>
        );
      }
      return imgStart;
    }
  };
  // Render introduce
  renderIntroduce = () => {
    let { movieDetail } = this.props;
    // console.log(movieDetail);
    return (
      <div>
        {/* introduce */}
        <section className="introduceMovie">
          <div className="introduceMovie__content">
            <div className="backgroundImg">
              <img src={movieDetail.hinhAnh} alt={movieDetail.maPhim} />
            </div>
            <div className="backgroundLinear" />
            <div className="row detailMovie detailWidth">
              <div className="col-sm-3 imgMovie">
                <img src={movieDetail.hinhAnh} alt={movieDetail.maPhim} />
                <div className="moviePlay">
                  <a
                    data-toggle="modal"
                    data-target="#trailerMovie"
                    onClick={() => {
                      this.props.dispatch(fetchMovieDetail(movieDetail.maPhim));
                    }}
                  >
                    <img src={playVideo} alt="play" />
                  </a>
                </div>
              </div>

              <div className="col-sm-6 inforMovie">
                <p>{moment(movieDetail.ngayKhoiChieu).format("L")}</p>
                <p>
                  <span className="span--red">C{movieDetail.maPhim}</span>
                  <span>{movieDetail.tenPhim}</span>
                </p>
                <p>91 phút - 0 IMDb - 2D/Digital</p>
              </div>
              <div className="col-sm-3 evaluateMovie">
                <div className="percentRated">
                  <svg>
                    <circle cx={70} cy={70} r={70} />
                    <circle cx={70} cy={70} r={70} />
                  </svg>
                  <div className="number">
                    <span>{movieDetail.danhGia + ".0"}</span>
                  </div>
                </div>
                <div className="starRated">
                  <div className="star">
                    {this.renderRating(movieDetail.danhGia)}
                  </div>
                  <span>270 người đánh giá</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Render theater system
  renderTheaterSystem = () => {
    let { movieDetail } = this.props;
    return movieDetail.heThongRapChieu?.map((theaterSys, index) => {
      let navLink;
      if (index === 0) {
        navLink = (
          <a
            key={index}
            className="nav-link active"
            id={`v-pills-${theaterSys.maHeThongRap}-tab`}
            data-toggle="pill"
            href={`#v-pills-${theaterSys.maHeThongRap}`}
            role="tab"
            aria-controls={`v-pills-${theaterSys.maHeThongRap}`}
            aria-selected="true"
          >
            <div className="row infoTheater">
              <div className="col-4 imgTheater">
                <img src={theaterSys.logo} alt="cgv" />
              </div>
              <div className="col-8 desTheater">
                <p>{theaterSys.tenHeThongRap}</p>
                {/* <p>
                  <img src="img/ct.png" alt="ct" />
                  <span>x3 vé CGV 79k/vé</span>
                </p> */}
              </div>
            </div>
          </a>
        );
      } else {
        navLink = (
          <a
            key={index}
            className="nav-link"
            id={`v-pills-${theaterSys.maHeThongRap}-tab`}
            data-toggle="pill"
            href={`#v-pills-${theaterSys.maHeThongRap}`}
            role="tab"
            aria-controls={`v-pills-${theaterSys.maHeThongRap}`}
            aria-selected="false"
          >
            <div className="row infoTheater">
              <div className="col-4 p-0 imgTheater">
                <img src={theaterSys.logo} alt="cgv" />
              </div>
              <div className="col-8 desTheater desCustomer">
                <p>{theaterSys.tenHeThongRap}</p>
              </div>
            </div>
          </a>
        );
      }
      return navLink;
    });
  };
  // Render show times
  renderShowTimes = () => {
    let { movieDetail } = this.props;
    return movieDetail.heThongRapChieu?.map((theaterSys, index) => {
      let tabContent;
      if (index === 0) {
        tabContent = (
          <div
            key={index}
            className="tab-pane fade show active"
            id={`v-pills-${theaterSys.maHeThongRap}`}
            role="tabpanel"
            aria-labelledby={`v-pills-${theaterSys.maHeThongRap}-tab`}
          >
            {theaterSys.cumRapChieu?.map((cinemaCluster, index) => {
              return (
                <div key={index} className="showTimesInfo m-0">
                  <div className="row theaterInfo">
                    <img
                      className="col-sm-1 imgTheater"
                      src={cinemaCluster.hinhAnh}
                      alt="cgv"
                    />
                    <div className="col-sm-11 infoContent">
                      <p>
                        <span>{cinemaCluster.tenCumRap.slice(0, 3)}</span>
                        <span> - {cinemaCluster.tenCumRap.slice(3)}</span>
                      </p>
                    </div>
                  </div>
                  <div className="movieSessions">
                    <div className="row listTime">
                      {cinemaCluster.lichChieuPhim
                        ?.slice(0, 21)
                        .map((showTimes, index) => {
                          return (
                            <NavLink
                              key={index}
                              exact
                              to={`/showTimes/${showTimes.maLichChieu}`}
                              className="col-sm-4 timeItem"
                            >
                              <span>
                                {moment(showTimes.ngayChieuGioChieu)
                                  .subtract(10, "days")
                                  .calendar()}
                              </span>
                              <span> ~ {showTimes.thoiLuong} phút</span>
                            </NavLink>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      } else {
        tabContent = (
          <div
            key={index}
            className="tab-pane fade"
            id={`v-pills-${theaterSys.maHeThongRap}`}
            role="tabpanel"
            aria-labelledby={`v-pills-${theaterSys.maHeThongRap}-tab`}
          >
            {theaterSys.cumRapChieu?.map((cinemaCluster, index) => {
              // console.log(cinemaCluster);
              return (
                <div key={index} className="showTimesInfo m-0">
                  <div className="row theaterInfo">
                    <img
                      className="col-sm-1 imgTheater"
                      src={cinemaCluster.hinhAnh}
                      alt="cgv"
                    />
                    <div className="col-sm-11 infoContent">
                      <p>
                        <span>{cinemaCluster.tenCumRap.slice(0, 3)}</span>
                        <span> {cinemaCluster.tenCumRap.slice(3)}</span>
                      </p>
                    </div>
                  </div>
                  <div className="movieSessions">
                    <div className="row listTime">
                      {cinemaCluster.lichChieuPhim
                        ?.slice(0, 21)
                        .map((showTimes, index) => {
                          // console.log(showTimes.maLichChieu);
                          return (
                            <NavLink
                              key={index}
                              exact
                              to={`/showTimes/${showTimes.maLichChieu}`}
                              className="col-sm-4 timeItem"
                            >
                              <span>
                                {moment(showTimes.ngayChieuGioChieu)
                                  .subtract(10, "days")
                                  .calendar()}
                              </span>
                              <span> ~ {showTimes.thoiLuong} phút</span>
                            </NavLink>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      return tabContent;
    });
  };

  // Render information
  renderInformation = () => {
    let { movieDetail } = this.props;
    // console.log(movieDetail);
    return (
      <div>
        <section className="informationMovie">
          <div className="informationMovie__content detailWidth">
            <ul
              className="nav justify-content-center"
              id="inforMovieTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="info-tab"
                  data-toggle="tab"
                  href="#info"
                  role="tab"
                  aria-controls="info"
                  aria-selected="true"
                >
                  Thông Tin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="showTimes-tab"
                  data-toggle="tab"
                  href="#showTimes"
                  role="tab"
                  aria-controls="showTimes"
                  aria-selected="true"
                >
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="evaluate-tab"
                  data-toggle="tab"
                  href="#evaluate"
                  role="tab"
                  aria-controls="evaluate"
                  aria-selected="false"
                >
                  Đánh Giá
                </a>
              </li>
            </ul>
            <div className="tab-content" id="inforMovieTabContent">
              {/* Thông tin phim */}
              <div
                className="tab-pane fade show active"
                id="info"
                role="tabpanel"
                aria-labelledby="info-tab"
              >
                <div className="row inforTop">
                  <div className="col-md-6 infor-left">
                    <div className="row left__item">
                      <p className="col-sm-4">Ngày phát hành</p>
                      <p className="col-sm-6">
                        {moment(movieDetail.ngayKhoiChieu).format("L")}
                      </p>
                    </div>
                    <div className="row left__item">
                      <p className="col-sm-4">Đạo diễn</p>
                      <p className="col-sm-6">Kay Nguyễn</p>
                    </div>
                    <div className="row left__item">
                      <p className="col-sm-4">Diễn viên</p>
                      <p className="col-sm-6">Hương Giang, Puka</p>
                    </div>
                    <div className="row left__item">
                      <p className="col-sm-4">Thể Loại</p>
                      <p className="col-sm-6">hài hước, hành động</p>
                    </div>
                    <div className="row left__item">
                      <p className="col-sm-4">Định dạng</p>
                      <p className="col-sm-6">2D/Digital</p>
                    </div>
                    <div className="row left__item">
                      <p className="col-sm-4">Quốc Gia SX</p>
                      <p className="col-sm-6">Việt Nam</p>
                    </div>
                  </div>
                  <div className="col-md-6 infor-right">
                    <div className="right__item">
                      <div className="itemTitle">
                        <p>Nội dung</p>
                      </div>
                      <div className="itemContent">
                        <p>
                          {movieDetail.moTa.length > 590
                            ? movieDetail.moTa.subString(0, 590) + " ... "
                            : movieDetail.moTa}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inforBottom">
                  <div className="bottomTitle">
                    <p>Tin liên quan</p>
                  </div>
                  <div className="bottomContent">
                    <a>
                      <div className="bottomImg">
                        <img
                          src={movieDetail.hinhAnh}
                          alt={movieDetail.maPhim}
                        />
                      </div>
                      <div className="bottomReview">
                        <p>
                          [Review] {movieDetail.tenPhim + " - "}{" "}
                          {movieDetail.moTa + " ... "}
                        </p>
                      </div>
                    </a>
                    <div className="bottom__icon">
                      <div className="like">
                        <img src={like} alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src={comment} alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lịch chiếu */}
              <div
                className="tab-pane fade"
                id="showTimes"
                role="tabpanel"
                aria-labelledby="showTimes-tab"
              >
                <div className="row">
                  {/* left */}
                  <div className="col-sm-4 col-12 listTheater">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    />
                    {this.renderTheaterSystem()}
                  </div>
                  {/* right */}
                  <div className="col-sm-8 col-12 contentST">
                    <div
                      className="tab-content m-0 contentST__content"
                      id="v-pills-tabContent"
                    >
                      {this.renderShowTimes()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Đánh giá */}
              <div
                className="tab-pane fade"
                id="evaluate"
                role="tabpanel"
                aria-labelledby="evaluate-tab"
              >
                <div className="listComment">
                  <div className="commentItem">
                    <div className="commentReviewer">
                      <div className="infoReviewer">
                        <div className="reviewer col-sm-6">
                          <img src={reviewer} alt="reviewer" />
                          <span>
                            <p>Hachivas Le </p>
                            <p>1 tháng trước</p>
                          </span>
                        </div>
                        <div className="numberOfReviews col-sm-6">
                          <div className="rate">
                            <p>7</p>
                            <p>
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="commentContent">
                        <p>
                          Dù đã đọc nhiều bình luận, nhận xét không hay về bộ
                          phim nhưng vẫn quyết định đi coi vì ủng hộ chị đẹp
                          Hương Giang. Phim mang tính hài hước, giải trí cao nhờ
                          sự duyên dáng của Phát La và Puka. Về phần diễn xuất
                          củq chị Giang thì mình thấy chưa thật sự tốt nhưng ổn
                          cho lần đầu đóng
                        </p>
                        <p>Xem thêm</p>
                      </div>
                    </div>
                    <div className="likes">
                      <img src={like} alt="like" />
                      <span>
                        <strong>0</strong> Thích
                      </span>
                    </div>
                  </div>
                  <div className="commentItem">
                    <div className="commentReviewer">
                      <div className="infoReviewer">
                        <div className="reviewer col-sm-6">
                          <img src={reviewer} alt="reviewer" />
                          <span>
                            <p>Anh Yêu</p>
                            <p>1 tháng trước</p>
                          </span>
                        </div>
                        <div className="numberOfReviews col-sm-6">
                          <div className="rate">
                            <p>8</p>
                            <p>
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="commentContent">
                        <p>
                          Phim xem được nha mọi người. Nói về cuộc đời thế giới
                          thứ ba
                        </p>
                        <p className="d-none">Xem thêm</p>
                      </div>
                    </div>
                    <div className="likes">
                      <img src={like} alt="like" />
                      <span>
                        <strong>0</strong> Thích
                      </span>
                    </div>
                  </div>
                  <div className="commentItem">
                    <div className="commentReviewer">
                      <div className="infoReviewer">
                        <div className="reviewer col-sm-6">
                          <img src={reviewer} alt="reviewer" />
                          <span>
                            <p>Sumika Ichigo </p>
                            <p>1 tháng trước</p>
                          </span>
                        </div>
                        <div className="numberOfReviews col-sm-6">
                          <div className="rate">
                            <p>8</p>
                            <p>
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="commentContent">
                        <p>
                          Mình thấy phim cũng khá đấy chứ! Chị Hương Giang công
                          nhận đẹp và sức hút thật. Cốt truyện đời thường, đơn
                          giản, được cái thích mấy miếng hài trong phim. Xem
                          giải trí cũng ổn. 😄😄😄
                        </p>
                        <p className="d-none">Xem thêm</p>
                      </div>
                    </div>
                    <div className="likes">
                      <img src={like} alt="like" />
                      <span>
                        <strong>0</strong> Thích
                      </span>
                    </div>
                  </div>
                  <div className="commentItem">
                    <div className="commentReviewer">
                      <div className="infoReviewer">
                        <div className="reviewer col-sm-6">
                          <img src={reviewer} alt="reviewer" />
                          <span>
                            <p>Binh</p>
                            <p>1 tháng trước</p>
                          </span>
                        </div>
                        <div className="numberOfReviews col-sm-6">
                          <div className="rate">
                            <p>7</p>
                            <p>
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                              <img src={star} alt="star1" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="commentContent">
                        <p>Phim coi tạm dc</p>
                        <p className="d-none">Xem thêm</p>
                      </div>
                    </div>
                    <div className="likes">
                      <img src={like} alt="like" />
                      <span>
                        <strong>0</strong> Thích
                      </span>
                    </div>
                  </div>
                  <div className="commentItem">
                    <div className="commentReviewer">
                      <div className="infoReviewer">
                        <div className="reviewer col-sm-6">
                          <img src={reviewer} alt="reviewer" />
                          <span>
                            <p>
                              Lê Chấn Thiên
                              <img src={ticket} alt="movieTicket" />
                            </p>
                            <p>1 tháng trước</p>
                          </span>
                        </div>
                        <div className="numberOfReviews col-sm-6">
                          <div className="rate">
                            <p>1</p>
                            <p>
                              <img src={star} alt="star1" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="commentContent">
                        <p>
                          phim này xem chỉ phí tiền, khuyên các bạn đừng xem.
                          quá dở lại còn kết thúc mở
                        </p>
                        <p className="d-none">Xem thêm</p>
                      </div>
                    </div>
                    <div className="likes">
                      <img src={like} alt="like" />
                      <span>
                        <strong>0</strong> Thích
                      </span>
                    </div>
                  </div>
                </div>
                <div className="newsButton d-flex justify-content-center">
                  <button className="btn--white">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Render movie detail
  renderDetail = () => {
    let { movieDetail } = this.props;
    return (
      <div>
        {/* introduce */}
        {this.renderIntroduce()}

        {/* information */}
        {this.renderInformation()}
      </div>
    );
  };
  render() {
    return <>{this.renderDetail()}</>;
  }
  componentDidMount() {
    let maPhim = this.props.match.params.maPhim;
    this.props.dispatch(fetchMovieDetail(maPhim));
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.MovieReducer.movieDetail || {
      biDanh: "",
      danhGia: "",
      heThongRapChieu: [],
      hinhAnh: "",
      maNhom: "",
      maPhim: "",
      moTa: "",
      ngayKhoiChieu: "",
      tenPhim: "",
      trailer: "",
    },
  };
};

export default connect(mapStateToProps)(MovieDetail);
