import React from "react";
import BackgroundImage from "../../Assets/Foody.jpg";
import "./Welcome.css";
import Footer from "../../components/Footer/Footer";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="welcomeDesign">
        <div className="background-image">{BackgroundImage}</div>
        <div className="Text-Wrapper">
          <div className="left-text">
            <h1 className="welcome-title">Eat Healthy</h1>
            <h2>Live Well</h2>
          </div>
          <div className="right-text">
            <h3 className="h3-text">
              Eating healthy is important for everyone especially teens. A
              healthy diet is the key to being fit. It is unlike any diet. You
              will feel so pure, balanced, and alert. It even prevents some
              health issues. You will love your body and your body will love you
              if you start eating healthy. There are so many different reasons
              why eating healthy is important.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Welcome;
