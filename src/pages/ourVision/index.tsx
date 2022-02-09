import React from "react";
import Hero from "../../components/hero/Hero";
import BlogCommunity from "../../layout/ourVision/community";
import CreateMarket from "../../layout/ourVision/createMarket/CreateMarket";
import CreateProject from "../../layout/ourVision/createProject";
import Container from "../../components/container/Container";
import AnimationText from "../../layout/home/animationText/AnimationText";
import BottomText from "../../components/bottomText/BottomText";

const Vision = () => {
  return (
    <Container>
      <Hero />
      <AnimationText />
      <div style={{ paddingTop: "4rem" }} />
      <BlogCommunity />
      <CreateMarket />
      <CreateProject />
      <BottomText ourVisionPg />
    </Container>
  );
};

export default Vision;
