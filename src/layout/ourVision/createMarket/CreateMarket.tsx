import React from "react";
import solar from "../../../assets/video/solar.mp4";
import { Subtitle } from "../../../components";
import VideoSetter from "../../../utils/VideoSetter";
import "./createMarket.scss";

const CreateMarket = () => {
  return (
    <>
      {/* For Large Screen */}
      <div className="vision-market">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="vision-market__left"></div>
          <div className="vision-market__right">
            <VideoSetter className="vision-market__video" video={solar} />
          </div>
        </div>
        <div className="vision-market__content">
          <div className="vision-market__content__header">
            <h4 className="vision-market__content__header__numbering">
              {" "}
              --- 02
            </h4>
            <Subtitle>
              Anybody can create <br /> a market
            </Subtitle>
            <div className="vision-market__pCont">
              <p
                style={{ maxWidth: "500px" }}
                className="vision-market__pCont__p"
              >
                Think /subreddit but investable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMarket;
