import React from "react";
import planet from "../../../assets/video/planet1.mp4";
import { Subtitle } from "../../../components";
import VideoSetter from "../../../utils/VideoSetter";
import "./_createProjects.scss";

const Community = () => {
  return (
    <div className="vision-projects">
      <div style={{ display: "flex", width: "100%" }}>
        <div className="vision-projects__left">
          <VideoSetter className="vision-projects__video" video={planet} />
        </div>
        <div className="vision-projects__right"></div>
      </div>
      <div className="vision-projects__content">
        <div className="vision-projects__content__header">
          <h4 className="vision-projects__content__header__numbering">
            {" "}
            --- 03
          </h4>
          <Subtitle>
            Anybody can create <br /> a project
          </Subtitle>
          <div className="projects__pCont">
            <p
              style={{ maxWidth: "500px" }}
              className="vision-projects__pCont__p"
            >
              Fundraising and community building, without the hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
