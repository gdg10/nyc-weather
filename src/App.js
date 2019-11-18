import React, { Component } from "react";
import logo from "./statue-of-liberty-icon.jpg";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner} from "react-bootstrap";

class App extends Component {
  state = {
    currentWeather: null,
  };

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=5128581&APPID=19933ade180f83fa38132ef04a04229a&units=imperial"
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
          {this.state.currentWeather === null ? (
            <Spinner animation="border" variant="light" />
          ) : (
            <CurrentWeather currentWeather={this.state.currentWeather} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
