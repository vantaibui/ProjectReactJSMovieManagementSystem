import React, { Component } from "react";
import Movie from "./Movie";
import "../App.scss";

export default class MovieList extends Component {
  // Render movie list
  renderMovieList = () => {
    let { movieList } = this.props;
    // console.log(movieList);
    return movieList.map((movie, index) => {
      return <Movie key={index} movie={movie} />;
    });
  };
  // Render show time
  renderShowTimes = () => {
    return (
      <section className="showTimes" id="showTimes">
        <div className="showTimes__content">
          <ul
            className="nav nav-tabs d-flex justify-content-center"
            id="showTimesTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="nowShowing-tab"
                data-toggle="tab"
                href="#nowShowing"
                role="tab"
                aria-controls="nowShowing"
                aria-selected="true"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="comingSoon-tab"
                data-toggle="tab"
                href="#comingSoon"
                role="tab"
                aria-controls="comingSoon"
                aria-selected="false"
              >
                Sắp Chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="showTimesTab">
            <div
              className="tab-pane fade show active"
              id="nowShowing"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="nowShowing__content">
                <div className="row">{this.renderMovieList()}</div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="comingSoon"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="sapchieu__content comingSoon__content owl-carousel owl-theme">
                <div className="row">{this.renderMovieList()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  // Data slide
  renderDataSlide = () => {
    let { movieList } = this.props;
    return movieList.slice(0, 5).map((item, index) => {
      let sideList;
      if (index === 0) {
        sideList = (
          <li
            data-target="#carouselTix"
            data-slide-to={item}
            className="active"
            key={index}
          />
        );
      } else {
        sideList = (
          <li data-target="#carouselTix" data-slide-to={item} key={index} />
        );
      }
      return sideList;
    });
  };
  // Render image carousel
  renderImgCarousel = () => {
    let { movieList } = this.props;
    return movieList.slice(0, 5).map((item, index) => {
      // console.log(index);
      let carouselItem;
      if (index === 0) {
        carouselItem = (
          <div className="carousel-item active" key={index}>
            <img
              src={item.hinhAnh}
              className="d-block w-100 carousel-img"
              alt={item.maPhim}
            />
            <div className="carousel-play">
              <a data-toggle="modal" data-target="#trailerMovie">
                <img src="img/play-video.png" alt="carousel-play" />
              </a>
            </div>
          </div>
        );
      } else {
        carouselItem = (
          <div className="carousel-item" key={index}>
            <img
              src={item.hinhAnh}
              className="d-block w-100 carousel-img"
              alt={item.maPhim}
            />
            <div className="carousel-play">
              <a data-toggle="modal" data-target="#trailerMovie">
                <img src="img/play-video.png" alt="carousel-play" />
              </a>
            </div>
          </div>
        );
      }
      return carouselItem;
    });
  };
  // Render carousel
  renderCarousel = () => {
    return (
      <section className="carouselTix">
        <div id="carouselTix" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">{this.renderDataSlide()}</ol>
          <div className="carousel-inner">{this.renderImgCarousel()}</div>
          <a
            className="carousel-control-prev control--back"
            href="#carouselTix"
            role="buthrefn"
            data-slide="prev"
          >
            <span aria-hidden="true">
              <img src="img/back-session.png" alt="back" />
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next control--next"
            href="#carouselTix"
            role="button"
            data-slide="next"
          >
            <span aria-hidden="true">
              <img src="img/next-session.png" alt="next" />
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="background-linear" />
      </section>
    );
  };
  // Render total
  render() {
    return (
      <>
        {this.renderCarousel()}
        {this.renderShowTimes()}
      </>
    );
  }
}
