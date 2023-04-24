import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeedBackForm from "./components/FeedBackForm/FeedBackForm";
import ThankyouAlert from "./components/ThankyouAlert/ThankyouAlert";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <FeedBackForm />
      <ThankyouAlert />
    </div>
  );
}

export default App;
