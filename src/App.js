import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import ContactProfile from "./pages/ContactProfile";
import store from "./app/store";
import { Provider, useSelector } from "react-redux";

const links = [{ name: "Contact", url: "/contact" }];

const RouteContainer = styled.div`
  width: 100%;
  margin-left: 16px;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Navbar links={links} />
          <RouteContainer>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />}>
                <Route path=":userId" element={<ContactProfile />} />
              </Route>
            </Routes>
          </RouteContainer>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
