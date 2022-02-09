import React from "react";
import { motion } from "framer-motion";
import projects from "../../../assets/image/projects.png";
import { Subtitle, Paragraph } from "../../../components";
import { useScroll } from "../../../hooks/useScroll";
import { cardAnimation } from "../../../utils/Animations";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "./_projects.scss";

const BlogCommunity = () => {
  const [element, controls]: any = useScroll();
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 919 && (
        <div className="projects" ref={element}>
          <div className="projects__content">
            <h4> For creators</h4>
            <Subtitle className="">Projects</Subtitle>
            <Paragraph>
              You have an idea that will solve a problem.
              <br /> Become a project creator and get onboarded by a market you
              trust.
              <br /> Raise money from investors to turn your idea into reality.
            </Paragraph>
          </div>
          <motion.div
            className="projects__projectImg"
            variants={cardAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <img
              src={projects}
              alt="projects"
              style={{ maxWidth: "600px", maxHeight: "550px" }}
            />
          </motion.div>
        </div>
      )}
      {width < 920 && (
        <div className="projectsForTablet">
          <div className="projects" ref={element}>
            <motion.div
              // variants={imageAnimationRight}
              variants={cardAnimation}
              animate={controls}
              transition={{ type: "spring", duration: 0.5 }}
              className="projects__projectsImg"
            >
              <img
                src={projects}
                alt="projects"
                style={{ maxWidth: "600px", maxHeight: "550px" }}
              />
            </motion.div>
            <div className="projects__content">
              <h4> For creators</h4>
              <Subtitle className="">Projects</Subtitle>
              <Paragraph>
                You have an idea that will solve a problem.
                <br /> Become a project creator and get onboarded by a market
                you trust.
                <br /> Raise money from investors to turn your idea into
                reality.
              </Paragraph>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCommunity;
