import React, { Component } from "react";
import WelcomePage from "../../containers/welcome_page";
import MovieDetail from "../../containers/movie_detail/movie_detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import "../App/App.css";
class App extends Component {
  render() {
    return (
      <div className="app_box">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/movie_detail/:id" component={MovieDetail} />
            <Route path="/" component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
