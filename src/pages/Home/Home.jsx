import React from "react";
import c from "./Home.module.css";
import Container from "../../shared/Container/Container";
import ImageTop from "./TopPart/ImageTop/ImageTop";
import Slogan from "./Slogans/Slogan";
import Samples from "./Samples/Samples";
import Slider from "./TopPart/Slider/Slider";
import TeamSlider from "./TopPart/TeamSlider/TeamSlider";

const Home = () => {
  return (
    <Container>
      <div className={c.adverb}>
        <Slider />
        <ImageTop />
      </div>
      <Samples />
      <Slogan />
      <TeamSlider />
    </Container>
  );
};

export default Home;
