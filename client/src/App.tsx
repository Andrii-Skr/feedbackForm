import styled from "styled-components";
import Content from "./components/Content";
import Footer from "./components/Footer";

const StayledApp = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 280px;
  background-image: url("src/assets/Contact.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

function App() {
  return (
    <StayledApp>
      <Content />
      <Footer />
    </StayledApp>
  );
}

export default App;
