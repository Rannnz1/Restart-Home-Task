import React, { Component } from "react";
import "./search_bar.css";
import { FormGroup, FormControl } from "react-bootstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FormGroup controlId="formBasicText">
          <FormControl
            className="my_input"
            type="text"
            value={this.state.term}
            placeholder="Enter movie name"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export default SearchBar;
