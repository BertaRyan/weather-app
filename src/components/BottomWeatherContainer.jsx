import { BottomContainer } from "./styles/styles";
import Box from "./Box";

const BottomWeatherContainers = ({
  feels_like,
  temp_max,
  temp_min,
  country,
  description,
  image,
}) => {
  return (
    <BottomContainer>
      <Box
        text="feels like"
        temp={`${Math.round(feels_like)}°`}
        description={description}
        image={image}
      />

      <Box
        text="Max Temp"
        temp={`${Math.round(temp_max)}°`}
        description={description}
        image={image}
      />

      <Box
        text="Min Temp"
        temp={`${Math.round(temp_min)}°`}
        description={description}
        image={image}
      />

      <Box
        text="Country"
        temp={country}
        description={description}
        image={image}
      />
    </BottomContainer>
  );
};

export default BottomWeatherContainers;
