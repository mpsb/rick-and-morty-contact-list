import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Index from "./pages/Index";

const links = [{ name: "Contact", url: "/contact" }];

const RouteContainer = styled.div`
  width: 100%;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar links={links} />
        <RouteContainer>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </RouteContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
