import React, { Component } from "react";
import "./movie_detail.css";
import { connect } from "react-redux";
import { fetch_movie } from "../../actions/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class MovieDetail extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetch_movie(this.props.match.params.id);
  }

  render() {
    const { active_movie } = this.props;
    return (
      <div className="movie_detail_card">
        <div className="movie_name">
          <h2>{active_movie.name}</h2>
        </div>
        <div className="card_image_description">
          <img alt="movie img " src={active_movie.imageUrl} />
          <div className="description">{active_movie.description}</div>
        </div>
        <div className="link">
          <Link to={`/welcome_page`}>back to home page</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ active_movie }) {
  return { active_movie };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch_movie }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
