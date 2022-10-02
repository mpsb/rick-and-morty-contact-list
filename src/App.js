import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import ContactProfile from "./pages/ContactProfile";
import store from "./app/store";
import { BREAKPOINTS } from "./constants";

const links = [{ name: "Contact", url: "/contact" }];

const AppContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  height: 95%;
  flex: 1;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer className="styled-scrollbars">
          <Navbar links={links} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />}>
              <Route path=":userId" element={<ContactProfile />} />
            </Route>
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
