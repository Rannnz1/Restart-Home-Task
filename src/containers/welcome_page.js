import React, { Component } from "react";
import SearchBar from "../containers/search_bar/search_bar";
import MovieList from "./movie_list/movie_list";
import { connect } from "react-redux";
import { fetch_movies } from "../actions/index";
import { bindActionCreators } from "redux";

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result_movies: []
    };
  }

  componentDidMount() {
    this.props.fetch_movies();
    this.setState({ result_movies: this.props.movies });
  }

  movies_filter(term) {
    const { movies } = this.props;
    const result_movies = movies.filter(movie => {
      return movie.name.toUpperCase().includes(term.toUpperCase());
    });
    this.setState({ result_movies });
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchTermChange={term => {
            this.movies_filter(term);
          }}
        />
        <MovieList movies={this.state.result_movies} />
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch_movies }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
