import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Moment js
var moment = require("moment");
moment().format();

export default class Movie extends Component {
  // Render rating
  renderRating = (rating) => {
    if (rating > 5) {
      rating = 5;
    }
    for (let i = 0; i < rating; i++) {
      return (
        <p>
          <img src="img/star1.png" alt="star1" />
          <img src="img/star1.png" alt="star1" />
          <img src="img/star1.png" alt="star1" />
          <img src="img/star1.png" alt="star1" />
          <img src="img/star1.png" alt="star1" />
        </p>
      );
    }
  };
  // Render movie list
  renderMovie = () => {
    let { movie } = this.props;
    return (
      <div className="col-sm-3">
        <div className="film">
          <div className="film__image">
            <img className="imgMovie" src={movie.hinhAnh} alt={movie.maPhim} />
            <div className="film__play">
              <a
                href="#"
                data-toggle="modal"
                data-target="#trailerMovie"
                onClick={() => {
                  
                }}
              >
                <img src="img/play-video.png" alt="play" />
              </a>
            </div>
            <div className="typePoint">
              <span className="span--red">C{movie.maPhim}</span>
              <span className="point">
                <p>{movie.danhGia + ".0"}</p>
                {this.renderRating(movie.danhGia)}
              </span>
            </div>
          </div>
          <div className="film__info">
            <p>
              {movie.tenPhim.length > 20
                ? movie.tenPhim.substring(0, 15) + " ... "
                : movie.tenPhim}
            </p>
            <p>
              {movie.moTa.length > 50
                ? movie.moTa.substring(0, 28) + " ... "
                : movie.moTa}
            </p>
            {/* <p>84 phút</p> */}
            <p>{moment(movie.ngayKhoiChieu).format("LL")}</p>
          </div>
          <div className="text-center mt-2">
            <NavLink
              exact
              // to='/movieDetail'
              to={`/movieDetail/${movie.maPhim}`}
              className="btn btn-warning px-4 py-2"
            >
              Mua Vé
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  render() {
    // return <div>{this.renderMovie()}</div>;
    return <>{this.renderMovie()}</>;
  }
}
