import React from "react";
import Hero from "../../components/hero/Hero";
import Container from "../../components/container/Container";
import Markets from "../../layout/home/markets/Market";
import Projects from "../../layout/home/projects/Projects";
import Investors from "../../layout/home/investors/Investors";
import AnimationText from "../../layout/home/animationText/AnimationText";
import Roadmap from "../../layout/home/roadmap/Roadmap";
import Subtitle from "../../components/subtitle/Subtitle";
import BottomText from "../../components/bottomText/BottomText";

const Home = () => {
  return (
    <Container>
      <Hero isHomePage />
      <AnimationText />
      <div style={{ padding: "48px 0 25px 0" }}>
        <Subtitle>HOW IT WORKS</Subtitle>
      </div>
      <Markets />
      <div style={{ marginTop: "7rem" }} />
      <Projects />
      <div style={{ marginTop: "7rem" }} />
      <Investors />
      <Roadmap />
      <BottomText />
    </Container>
  );
};

export default Home;
