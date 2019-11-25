import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import styled from "styled-components";
import NewYorkHero0 from "./MidTown.jpg";
import NewYorkHero1 from "./NewYorkHero1.jpg"
import NewYorkHero2 from "./NewYorkHero2.jpg"
import NewYorkHero3 from "./NewYorkHero3.jpeg"
import NewYorkHero4 from "./NewYorkHero4.jpg"
import NewYorkHero5 from "./NewYorkHero5.jpg"

const heroImages = [NewYorkHero0, NewYorkHero1, NewYorkHero2, NewYorkHero3, NewYorkHero4, NewYorkHero5];
const ViewPortPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: black;
`;

const HeroContainer = styled.header`
  font-family: "Marvel", sans-serif;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.94),
      rgba(225, 225, 225, 0.03)
    ),
    url(${heroImages[(Math.floor(Math.random()*5))]});
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
              " "
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
