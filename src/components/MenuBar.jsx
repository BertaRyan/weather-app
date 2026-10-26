import {
  TopBar,
  ToggleContainer,
  LightIcon,
} from "./styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const MenuBar = ({ isLight, handleLight }) => {


  return (
    <TopBar>
      <h2>Weather App</h2>
      <ToggleContainer onClick={handleLight}>
        <LightIcon isLight={isLight === true ? isLight : false}  >
          {isLight ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </LightIcon>
      </ToggleContainer>
    </TopBar>
  );
};

export default MenuBar;
