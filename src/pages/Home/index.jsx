import { useState, useEffect } from "react";
import axios from "axios";
import { Div } from "../../components/styles/styles";
import SideContainer from "../../components/SideContainer.jsx";
import WeatherTitleContainer from "../../components/WeatherTitleContainer.jsx";
import MainContainer from "../../components/MainContainer.jsx";
import styled from "styled-components";

const Loading = styled.h3`
  z-index: 1;
  text-align: center;
  margin: 50px 0;
`;

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [weatherImage, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState("");



  const getCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      getLocation(position);
    });
  };

  const getLocation = async (position) => {
    const {
      coords: { longitude, latitude },
    } = position;

    try {
      const { data: weather } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1555f40f6f487d79fee19621e64cedb&units=imperial`
      );
      const {
        name,
        sys: { country },
        visibility,
        wind: { speed },
        clouds: { all },
        main: { temp, feels_like, temp_max, temp_min, humidity },
        weather: {
          0: { description, main },
        },
      } = weather;
      const { data: image } = await axios(
        `https://api.unsplash.com/search/photos?client_id=0W6SuubbBLcxd7rIzK-t1JPVICqxfdYlVmYHPh4ayMY&query=${weatherData.main}`
      );

      const {
        results: {
          5: {
            urls: { regular },
          },
        },
      } = image;

      setImage(regular);
      setWeatherData({
        country,
        humidity,
        temp,
        name,
        visibility,
        speed,
        all,
        feels_like,
        temp_max,
        temp_min,
        description,
        main,
      });
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      setErrorMessage(err.message);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <WeatherTitleContainer />

      {hasError && <h3>We ran into an error. . . {errMessage}</h3>}
      {loading && <Loading>Getting the Weather</Loading>}
      {weatherData && !loading && (
        <Div>
          <MainContainer
            main={weatherData.main}
            temp={Math.round(weatherData.temp)}
            name={weatherData.name}
            image={weatherImage}
            country={weatherData.country}
            temp_max={Math.round(weatherData.temp_max)}
            temp_min={weatherData.temp_min}
            description={weatherData.description}
            feels_like={Math.round(weatherData.feels_like)}
          />
          <SideContainer
            humidity={weatherData.humidity}
            visibility={weatherData.visibility}
            all={weatherData.all}
            speed={weatherData.speed}
          />
        </Div>
      )}
    </div>
  );
};

export default Home;
