import React, { Component } from "react";
import logo from "./statue-of-liberty-icon.jpg";
import "./App.css";
import CurrentWeather from "./CurrentWeather";

class App extends Component {
  state = {
    currentWeather: null
  };

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=5128581&APPID=19933ade180f83fa38132ef04a04229a&units=imperial"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ currentWeather: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.currentWeather === null ? (
            <p></p>
          ) : (
            <CurrentWeather currentWeather={this.state.currentWeather} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
