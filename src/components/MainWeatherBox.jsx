import { TopContainer } from "./styles/styles";

const MainWeatherBox = ({ main, temp, name, image }) => {
  return (
    <TopContainer background={image}>
      <h3>{main}</h3>
      <h2>{`${Math.round(temp)}°`}</h2>

      <h1>{name}</h1>
    </TopContainer>
  );
};

export default MainWeatherBox;
