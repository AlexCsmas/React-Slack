import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
