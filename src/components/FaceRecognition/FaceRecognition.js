import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center">
      <div className=" absolute mt2">
        <img id="inputImage" src={imgUrl} alt="" height="auto" width="500px" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            left: box.leftCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
