import React, { Component } from "react";
import Navbar from "./navbar";
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";
import Particles from "react-tsparticles";
import App from "./navimage";
import AwesomeSlider from "react-awesome-slider";
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import "react-awesome-slider/dist/styles.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#0b0c10",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#66fcf1",
              },
              links: {
                color: "#66fcf1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Navbar />
        <App />
        {/* <Greet /> */}

        {/* <TypeWriterC /> */}

        <Cards />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
