import { motion } from "framer-motion";
import styled from "styled-components";
import dashboard1 from "../assets/dashboard1.jpg";
import dashboard2 from "../assets/dashboard2.jpg";
import dashboard3 from "../assets/dashboard3.jpg";
import dashboard4 from "../assets/dashboard4.webp";
import dashboard5 from "../assets/dashboard5.avif";
import dashboard6 from "../assets/dashboard6.webp";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <ImageGrid>
        {[dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6].map((image, index) => (
          <Card
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={image} alt={`Game ${index + 1}`} />
          </Card>
        ))}
      </ImageGrid>
    </DashboardContainer>
  );
}

// Styled Components
const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a0a0a;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  grid-template-rows: repeat(2, 1fr); /* 2 rows */
  gap: 20px;
  width: 90vw;
  height: 90vh;
`;

const Card = styled(motion.div)`
  background: #1e1e1e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
