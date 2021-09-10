import React, { Component } from "react";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Audio from "./Components/Audio/Audio";
import Cover from "./Components/Cover/Cover";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: false,
    };
  }

  changeCover = (cover) => {
    this.setState({ cover: cover });
  };

  render() {
    if (!this.state.cover) {
      return (
        <div className="app">
          <div className="cover">
            <Cover cover={this.state.cover} onChange={this.changeCover} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="app">
          <div className="section">
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
            <div className="audio">
              <Audio />
            </div>
            <BottomNavigation />
          </div>
        </div>
      );
    }
  }
}

export default App;
