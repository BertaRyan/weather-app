import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  overflow-y: hidden;
`;

export const TopBar = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  transition: 0.5s;
  background: ${(props) => props.theme.main};
  h2 {
    color: ${(props) => props.theme.secondary};
    font-family: "Dancing Script", cursive;
    text-shadow: 10px 5px 0px ${(props) => props.theme.accent};
  }
     &::-webkit-scrollbar {
    width: 8px;
  }
`;

export const ToggleContainer = styled.div`
  background: grey;
  border-radius: 25px;
  width: 75px;
  height: 25px;
  margin-right: 25px;
  position: relative;
  background: ${(props) => props.theme.secondary};
  transition: 0.5s;
`;

export const LightIcon = styled.div`
  padding: 5px;
  border-radius: 50%;
  color: ${(props) => props.theme.accent};
  cursor: pointer;
  margin-left: ${(props) => (props.isLight ? "3px" : "50px")};
  transition: 0.5s;
`;

export const HeadContainer = styled.div`
border-top:1px solid;
border-bottom:1px solid ${(props) => props.theme.border};
  display: flex;
  align:items:center;
  justify-content:space-evenly;
  background: ${(props) => props.theme.accent};
  padding: 50px 10px;
  font-size: ${(props) => (props.size ? "32px" : "12px")};
  transition: 2s;
  div {
    flex-basis: 40%;
  }
  h1{
    font-size:25px;
  }
  p{
    font-size:12px;
    color: ${(props) => props.theme.main}
  }
`;

export const MainContainerStyle = styled.div`
  width: 60%;
  padding: 20px 40px;
  display: flex;
  margin:0;
  flex-direction: column;
  background: ${(props) => props.theme.main};
  transition: 0.5s;
  height:100%;
`;

export const TopContainer = styled.div`
  background-image: url(${({ background }) => background});
  position:relative;
  color: white;
  box-shadow: 0 0 40px ${(props) => props.theme.shadow};
  box-shadow-color: 
  font-weight: 900;
  border-radius: 25px;
  padding: 60px 20px;
  margin-top: 20px;
  cursor: pointer;
  background-size:120%;
  transition: 3s;
  &:hover {
    background-size: 100%;
  }
  h2 {
    margin: 5px 0;
    font-size: 40px;
       position:relative;
    z-index:3;
  }
  h1 {
    font-size: 18px;
       position:relative;
    z-index:3;
  }
  h3 {
    font-size: 15px;
    position:relative;
    z-index:3;
  }
    &::before{
    content:"";
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.4);
    z-index:1;
    border-radius: 25px;
    }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

export const BoxContainer = styled.div`
  box-shadow: 0 0 30px ${(props) => props.theme.shadow};
    position:relative;
  background-size: 200%;
  text-align: center;
  padding: 50px 25px;
  color: white;
  flex-basis: 23%;
  background-image: url(${({ background }) => background});
  backgound-size: cover;
  border-radius: 25px;
  transition: 3s;
  &:hover {
    background-size: 220%;
  }
  h1 {
    font-size: 25px;
     position:relative;
    z-index:3;
  }
  h2 {
    font-size: 12px;
     position:relative;
    z-index:3;
  }
  h3 {
    font-size: 12px;
    position:relative;
    z-index:3;
  }
    &::before{
    content:"";
    position:absolute;
    background: rgba(0,0,0,.4);
    inset:0;
    border-radius: 25px;
    width:100%;
    height:100%;
    }
`;

export const VerticalContainer = styled.div`
  position:relative;
  padding: 15px 40px;
  border-left: 1px solid;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.main};
  width: 100%;
  
  transition: 0.2s;
  &:hover {
    border-left: 3px solid ${(props) => props.theme.border};
  }
  i {
  text-align:left;
    padding: 5px;
    border-radius: 50%;
    margin-top: 15px;
    color: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.shadow};
    transition: 0.5s;
    font-size: 25px;
    font-weight: 300;
  }

  div {
    margin: 5px 0;
    color: ${(props) => props.theme.secondary};
    text-shadow: 2px 2px 10px ${(props) => props.theme.shadow};
  }
  p {
    color: ${(props) => props.theme.secondary};
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const InnerVerticalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SideContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  text-align:left;
`;

