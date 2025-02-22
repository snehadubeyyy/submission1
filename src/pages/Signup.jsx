import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import styled from "styled-components";
import backgroundImage from "../assets/ii4.avif";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <Container>
      <Overlay />
      <Card>
        <h2>Signup</h2>
        <SignupForm onSubmit={() => navigate("/dashboard")} />
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </Card>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for better readability */
  z-index: 0;
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.15); /* Semi-transparent box */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 350px;
  text-align: center;
  backdrop-filter: blur(10px); /* Frosted glass effect */

  h2 {
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: white;
  }

  a {
    text-decoration: none;
    color: #4db8ff;
    font-weight: bold;

    &:hover {
      color: #fff;
    }
  }
`;
