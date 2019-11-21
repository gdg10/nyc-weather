import React, { Component } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import NewYork from "./nyc-background.gif";

const AppWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #fcfcfc;
`;

const TopContainer = styled.div`
  height: 50vh;
  width: 100vw;
  float: left;
  background-color: #fcfcfc;
`;

const PlaceHolderContainer = styled.header`
  height: 50vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #fcfcfc;
  float: left;
`;

const GifContainer = styled.header`
  background-image: url(${NewYork});
  background-size: auto;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 50vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fcfcfc;
  float: left;
`;

class App extends Component {
  state = {
    currentWeather: null
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
      <AppWrapper>
        <TopContainer>
        {this.state.currentWeather === null ? (
            <Spinner animation="border" variant="light" />
          ) : (
            <CurrentWeather currentWeather={this.state.currentWeather} />
          )}
        </TopContainer>
        <PlaceHolderContainer />
        <GifContainer/>
        <PlaceHolderContainer />
      </AppWrapper>
    );
  }
}

export default App;
