import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const myImg = "https://steamuserimages-a.akamaihd.net/ugc/925926525726597287/213C65E6B478624A5A3D87220B03D169F76D71BC/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

const styles = {
  img: {
    height: "400px",
    width: "auto",
    fitContent: "contain",
  },
};

const About = () => {
  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      <img style={styles.img} src={myImg} className="card-img" alt="Tanmay Sarker" />
      <p>Hey everybody! Take a look around my page to explore more.</p>
      <p>
        <Button
          variant="primary"
          href="linkedin.com/in/tanmay-sarker-695754178"
        >
          Linkedin
        </Button>
        <Button variant="primary" href="https://github.com/tsarker921">
          Github
        </Button>
      </p>
    </Jumbotron>
  );
};

export default About;
