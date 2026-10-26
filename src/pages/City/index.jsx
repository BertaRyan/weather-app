import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import { Div } from "../../components/styles/styles";
import SideContainer from "../../components/SideContainer.jsx";
import WeatherTitleContainer from "../../components/WeatherTitleContainer.jsx";
import MainContainer from "../../components/MainContainer.jsx";

const City = () => {
  const [weatherData, setWeatherData] = useState({});
  const [weatherImage, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState("");

  const {cityId} = useParams()



  const getLocation = async () => {
    try {
      setLoading(true);
      const { data: weather } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=a1555f40f6f487d79fee19621e64cedb&units=imperial`
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
          0: {
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
    getLocation();
  }, [cityId]);

  return (
    <div>
      <WeatherTitleContainer />
      {loading && <h3>Getting the Weather</h3>}
      {hasError && <h3>We ran into an error. . . {errMessage}</h3>}
      {weatherData && !loading && (
        <Div>
          <MainContainer
            main={weatherData.main}
            temp={weatherData.temp}
            name={weatherData.name}
            image={weatherImage}
            country={weatherData.country}
            temp_max={weatherData.temp_max}
            temp_min={weatherData.temp_min}
            description={weatherData.description}
            feels_like={weatherData.feels_like}
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

export default City;
