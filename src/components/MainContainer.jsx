import { MainContainerStyle } from "./styles/styles";
import MainWeatherBox from "./MainWeatherBox.jsx";
import BottomWeatherContainers from "./BottomWeatherContainer.jsx";

const MainContainer = ({
  main,
  temp,
  name,
  image,
  country,
  temp_max,
  temp_min,
  description,
  feels_like,
}) => {
  return (
    <MainContainerStyle>
      <MainWeatherBox main={main} temp={temp} name={name} image={image} />
      <BottomWeatherContainers
        temp={temp}
        country={country}
        image={image}
        temp_max={temp_max}
        temp_min={temp_min}
        description={description}
        feels_like={feels_like}
      />
    </MainContainerStyle>
  );
};

export default MainContainer;
