import { SideContainerStyled } from "./styles/styles";
import RightBox from "./RightBox.jsx";
import {
  faEye,
  faWind,
  faCloud,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const SideContainer = ({ visibility, speed, humidity, all }) => {
  return (
    <SideContainerStyled>
      <RightBox icon={faEye} text="Visibility" data={`${visibility} ft`} />
      <RightBox icon={faWind} text="wind" data={`${speed?.toFixed()} /mph`} />
      <RightBox icon={faCloud} text="Clouds" data={`${all}%`} />
      <RightBox icon={faDroplet} text="Humidity" data={`${humidity}%`} />
    </SideContainerStyled>
  );
};

export default SideContainer;
