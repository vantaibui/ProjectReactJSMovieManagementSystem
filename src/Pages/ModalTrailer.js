import React, { Component } from "react";
import { connect } from "react-redux";

class ModalTrailer extends Component {
  renderModalTrailer = () => {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="trailerMovie"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <img src="img/close.png" alt="close" />
                </span>
              </button>
              <iframe
                src={this.props.movies.trailer}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <>{this.renderModalTrailer()} </>;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.MovieReducer.movies,
  };
};

export default connect(mapStateToProps)(ModalTrailer);
