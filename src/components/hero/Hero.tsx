import React from "react";
import planet1 from "../../assets/video/planet1.mp4";
import planet2 from "../../assets/video/planet2.mp4";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import VideoSetter from "../../utils/VideoSetter";
import GetErlyAcsBtn from "../bigButton/BigButton";
import "./_hero.scss";
// import "./hero.css";

const Hero = ({ isHomePage }: any) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="theia-hero theia-hero-css">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="theia-hero__left"></div>
          <div className="theia-hero__right">
            <VideoSetter
              className="theia-hero__video"
              video={isHomePage ? planet1 : planet2}
            />
          </div>
        </div>

        <div className="theia-hero__content">
          <div className="theia-hero__content__header">
            {isHomePage ? (
              <h1
                className="theia-hero__content__header__h1"
                data-aos="fade-zoom-in"
                data-aos-duration="600"
              >
                Create & Invest
                <br />
                in Web 3.0
              </h1>
            ) : (
              <h1
                className="theia-hero__content__header__h1"
                data-aos="fade-zoom-in"
                data-aos-duration="600"
              >
                {width > 400 ? (
                  <p>
                    The Future <br /> of Innovation
                  </p>
                ) : (
                  <p>
                    The <br /> Future of
                    <br /> Innovation
                  </p>
                )}
              </h1>
            )}
            {isHomePage ? (
              <p
                className="theia-hero__content__header__p"
                style={{ maxWidth: "600px" }}
              >
                THEIA is a social investment platform empowering creators
                through the power of communities.
              </p>
            ) : (
              <p
                className="theia-hero__content__header__p"
                style={{ maxWidth: "580px" }}
              >
                THEIA is accelerating innovation through the power of community.
              </p>
            )}

            <GetErlyAcsBtn />
          </div>
        </div>
      </div>
      <div className="hero_container-sm-sc">
        <VideoSetter
          className="hero_container-video-sm-sc"
          video={isHomePage ? planet1 : planet2}
        />
      </div>
    </>
  );
};

export default Hero;
