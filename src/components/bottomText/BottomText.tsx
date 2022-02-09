import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./_bottomText.scss";
import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import GetErlyAcsBtn from "../bigButton/BigButton";
import { hoverTxtShadow } from "../../utils/Animations";

const BottomText = ({ ourVisionPg }: any) => {
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <Title>Invest in what you believe in</Title>
        <Subtitle style={{ margin: "1rem 0 1.5rem 0" }}>
          We’re building a social investment platform for creators, by creators.
        </Subtitle>
        <div>
          <div className="bottom-text-container">
            <div className="theia__header-content__input ">
              <GetErlyAcsBtn />
            </div>
            <div className="bottom-text-link">
              {ourVisionPg ? (
                <Link to="/">
                  <motion.p whileHover={hoverTxtShadow}>How it works</motion.p>
                </Link>
              ) : (
                <Link to="/our-vision">
                  <motion.p whileHover={hoverTxtShadow}>Our Vision</motion.p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomText;
