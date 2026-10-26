import styled from "styled-components";

export const Div = styled.div`
  display: flex;

   @media (max-width:1400px){
  flex-direction:column;
  }
 
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
  margin-left: ${(props) => (props.isLight ? "-40px" : "45px")};
  margin-top:-4px;
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
  transition: .5s;
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

  @media (max-width: 700px){
  flex-direction:column;
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

   @media (max-width:1400px){
  width:100%;
  }
 
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
  transition: 1s;
  &:hover {
    background-size: 100%;
  }
  h2 {
    margin: 5px 0;
    font-size: 30px;
       position:relative;
    z-index:3;
  }
  h1 {
    font-size: 30px;
       position:relative;
    z-index:3;
  }
  h3 {
    font-size: 30px;
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
  margin-top: 20px;

  @media (max-width: 1400px){
  justify-content: space-between;
  }
`;

export const BoxContainer = styled.div`
  box-shadow: 0 0 30px ${(props) => props.theme.shadow};
    position:relative;
  background-size: 200%;
  text-align: center;
  padding: 25px 0px;
  color: white;
  flex-basis: 49%;
  background-image: url(${({ background }) => background});
  backgound-size: cover;
  border-radius: 25px;
  transition: 1s;
  box-sizing:border-box;
  margin:0 !important;
  &:hover {
    background-size: 220%;
  }
  h1 {
    font-size: 25px;
    margin:0;
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

      @media (max-width:1400px){
  flex-basis: 49%;
  
  }

  @media (max-width:740px){
  flex-basis: 100%;
  }
`;

export const VerticalContainer = styled.div`
  position:relative;
  padding: 20px 40px;
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
  flex-basis: 50%;
  text-align:left;
`;

