import {
  VerticalContainer,
  InnerVerticalContainer,
} from "../components/styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightBox = ({ icon, text, data }) => {
  return (
    <VerticalContainer>
      <i>
        <FontAwesomeIcon icon={icon} />
      </i>
      <InnerVerticalContainer>
        <div>{text}</div>
        <div>{data}</div>
      </InnerVerticalContainer>
      <p>
        The air Quality is generally acceptable for most individuals. However,
        sensitive groups may experience minor to moderate symptoms from
        long-term exposure
      </p>
    </VerticalContainer>
  );
};

export default RightBox;
