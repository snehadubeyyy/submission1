import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../assets/ii4.avif";

export default function Home() {
  return (
    <HomeContainer>
      <ImageBg src={backgroundImage} alt="Background Image" />
      <Overlay>
        <h1>Welcome to Ultimate Gaming Experience</h1>
        <ButtonContainer>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/signup">Signup</StyledLink>
        </ButtonContainer>
      </Overlay>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
`;

const ImageBg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background: blue;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
`;
