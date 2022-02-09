import React from "react";
import galaxy from "../../../assets/video/galaxy.mp4";
import { Subtitle } from "../../../components";
import VideoSetter from "../../../utils/VideoSetter";
import "./_blogcommunity.scss";

const Community = () => {
  return (
    <div className="community">
      <div style={{ display: "flex", width: "100%" }}>
        <div className="community__left">
          <VideoSetter className="community__video" video={galaxy} />
        </div>
        <div className="community__right"></div>
      </div>
      <div className="community__content">
        <div className="community__content__header">
          <h4 className="community__content__header__numbering"> --- 01</h4>
          <Subtitle>
            A community for <br /> communities
          </Subtitle>
          <div className="community__pCont">
            <p style={{ maxWidth: "500px" }} className="community__pCont__p">
              Our system unites markets, projects and investors, truly aligning
              incentives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
