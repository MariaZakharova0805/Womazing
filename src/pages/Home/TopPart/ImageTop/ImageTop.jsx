import React from "react";
import c from "./ImageTop.module.css";

import img1 from "../../../../app/img/HomeImg/firstpage_firstPic.png";
import img2 from "../../../../app/img/HomeImg/firstpage_secondPic.png";
import img3 from "../../../../app/img/HomeImg/firstpage_thirdPic.png";
import Container from "../../../../shared/Container/Container";

const ImageTop = () => {
  return (
    <Container>
      <div className={c.images}>
        <div className={c.imageOne}>
          <img src={img1} alt="womazing shirt" />
        </div>
        <div className={c.imageTwo}>
          <img src={img2} alt="womazing coat" />
        </div>
        <div className={c.imageThree}>
          <img src={img3} alt="womazing hat" />
        </div>
        <div className={c.imageFour}></div>
      </div>
    </Container>
  );
};
export default ImageTop;
