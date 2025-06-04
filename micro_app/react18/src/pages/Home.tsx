import React from "react";
import ReactLogo from "@/assets/logo512.png";
import TextSvg from "@/assets/text.svg";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <img src={ReactLogo} alt="Logo"/>
      <img src={TextSvg} alt="Text"/>
    </div>
  );
};

export default Home;
