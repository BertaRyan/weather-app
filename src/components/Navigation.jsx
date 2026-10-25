import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background: ${(props) => props.theme.main};
  flex-direction: column;
  width: 30%;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.border};
  border-right: 1px solid ${(props) => props.theme.border};
  height: 100vh;
  padding: 35px 20px;
  transition: 0.5s;
  overflow-y: scroll;
  overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar {
    width: 15px;
  }

  /* Scrollbar track (background) */
  &::-webkit-scrollbar-track {
    background: lightblue;
    border-radius: 10px;
  }

  /* Scrollbar thumb (the draggable part) */
  &::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Thumb on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
`;
const Input = styled.input`
width:100%;
  background: ${(props) => props.theme.secondary};
  border: none;
  focus: border:none;
  padding:10px;
  border-radius:15px;
  color:${(props) => props.theme.main};
  ::placeholder{
    color:${(props) => props.theme.main};
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 4px solid ${(props) => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  transition: 3s;
  border-radius: 50%;
  img {
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  margin-right: 15px;
  margin-top: 20px;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 900;
  margin-bottom: 15px;
  width: 100%;
  a {
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      margin-left: 10px;
      margin-right: 15px;
    }
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-left: 5px;
  width: 100%;
  color: ${(props) => props.theme.secondary};
  transition: 0.8s;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const CityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 5px 0;
  gap: 15px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }
`;

const Navigation = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState({});
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = { value: value.toLowerCase().trim() };
    setValue("");
    getCityLocation(inputValue);
  };

  const setInStorage = (city) => {
    console.log(city)
    window.localStorage.setItem("city", JSON.stringify(city));
  };

  const handleClick = (value) => {
    const newList = city.filter((item) => item !== value);

    setCity(newList);
    setInStorage(newList);
  };


  const getLocation = async (userLocation) => {
    const {
      coords: { latitude, longitude },
    } = userLocation;
    try {
      setLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1555f40f6f487d79fee19621e64cedb`
      );
      setLoading(false);
      const {
        name,
        sys: { country },
      } = data;

      setUser({
        name,
        country,
        flag: `https://flagsapi.com/${country}/shiny/24.png`,
      });
      console.log(user);
    } catch (err) {
      setError(true);
      setLoading(false);
      setErrorMessage(err.message);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getLocation(position);
    });
  };

  const getCityLocation = async (value) => {
    const repeat = city.find((item) => item.value == value.value);
    if (repeat) alert("You already have this city, Search another one.");
    else {
      try {
        setLoading(true);
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${value.value}&appid=a1555f40f6f487d79fee19621e64cedb`
        );
        value.flagUrl =
          "https://flagsapi.com/" + data.sys.country + "/shiny/24.png";
        const newList = [...city, value];

        setCity(newList);
        setInStorage(newList);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        setErrorMessage(err.message);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    getCurrentLocation();
    setCity(JSON.parse(window.localStorage.getItem("city")) || []);
  }, []);

  return (
    <Nav>
      <LogoContainer>
        <img
          src="https://cdn.pixabay.com/photo/2023/09/12/20/41/ai-generated-8249560_1280.png"
          alt=""
        />
      </LogoContainer>
      <UserItem>
        <Link to="/">
          <img src={user.flag} />
          {user && !loading && (
            <div>
              Current: {user.country} {user.name}
            </div>
          )}
        </Link>
      </UserItem>
      <form action="" onSubmit={handleSubmit}>
        <Input
          placeholder="Search Location"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </form>
      {loading && <div>Loading. . .</div>}
      {hasError && <div>we have encountered an Error. . .{errMessage}</div>}

      <List>
        {city.map((city) => (
          console.log(city, "CITY"),
          <Item key={city.value}>
            <CityContainer>
              <img src={city.flagUrl} />
              <Link to={`/city/${city.value}`} city={city} >{city.value}</Link>{" "}
            </CityContainer>
            <FontAwesomeIcon icon={faXmark} onClick={() => handleClick(city)} />
          </Item>
        ))}
      </List>
    </Nav>
  );
};

export default Navigation;
