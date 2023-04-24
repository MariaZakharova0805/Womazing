import React from "react";
import c from "./ImageSlider.module.css";
import { Fade } from "react-slideshow-image";
import { useHomeData } from "../../../../store/useStore";
import "react-slideshow-image/dist/styles.css";


const properties = {
  prevArrow: <span style={{ display: "none" }}></span>,
  nextArrow: <span></span>,
};

const indicators = (index) => <div className="indicator"></div>;

export default function ImageSlider() {
  const { fadeImages } = useHomeData((state) => state);


  return (
    <div className={c.slideContainer}>
      <Fade {...properties} indicators={indicators}>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
  );
}
