import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Main  className="main"/>
      <Footer  className="footer"/>
    </div>
  );
}

export default App;
