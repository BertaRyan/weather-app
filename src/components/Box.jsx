import { BoxContainer } from "./styles/styles";

const Box = ({ text, temp, description, image }) => {
  return (
    <BoxContainer background={image}>
      <h2>{text}</h2>
      <h1>{temp}</h1>
      <h3>{description}</h3>
    </BoxContainer>
  );
};

export default Box;
