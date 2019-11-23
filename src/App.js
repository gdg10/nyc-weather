
import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import styled from "styled-components";
import NewYorkBackground from "./MidTown.jpg";

const ViewPortPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: black;
`;

const HeroContainer = styled.header`
  font-family: 'Marvel', sans-serif;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(225, 225, 225, 0.03)),url(${NewYorkBackground});
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto;
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  text-align: center;
  color: white;
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
      <React.Fragment>
        <ViewPortPage>
          <HeroContainer>
            {this.state.currentWeather === null ? (
              ' '
            ) : (
              <CurrentWeather weather={this.state.currentWeather} />
            )}
          </HeroContainer>
        </ViewPortPage>
      </React.Fragment>
    );
  }
}

export default App;
