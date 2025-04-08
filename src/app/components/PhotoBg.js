import Image from "next/image";
import React from "react";
import HousePic from "../../../public/HousePic.jpeg";

const PhotoBg = () => {
  return (
    <div>
      <Image src={HousePic} style={{ width: "100vw", height: "94vh" }} />
    </div>
  );
};

export default PhotoBg;
