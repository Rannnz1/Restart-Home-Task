import React, { Component } from "react";
import "./movie_list.css";
import { Link } from "react-router-dom";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default class MovieList extends Component {
  renderList() {
    const sorted_movies = this.sort_by_year(this.props.movies);

    if (sorted_movies[0]) {
      return this.props.movies.map(movie => {
        return (
          <Tr key={movie.id}>
            <Td>
              <Link to={`/movie_detail/${movie.id}`}>{movie.name}</Link>
            </Td>
            <Td> {movie.id}</Td>
            <Td> {movie.category}</Td>
            <Td> {movie.year}</Td>
          </Tr>
        );
      });
    }
  }

  sort_by_year(movies) {
    if (movies[0]) {
      const sorted_movies = movies.sort((a, b) => {
        return a.year < b.year;
      });
      return sorted_movies;
    }
    return movies;
  }

  render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Book name</Th>
            <Th>ID</Th>
            <Th>Category</Th>
            <Th>Year</Th>
          </Tr>
        </Thead>
        <Tbody>{this.renderList()}</Tbody>
      </Table>
    );
  }
}
