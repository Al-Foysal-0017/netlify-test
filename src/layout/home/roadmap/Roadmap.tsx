import React from "react";
import { AiTwotonePoundCircle } from "react-icons/ai";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BigButton from "../../../components/bigButton/BigButton";
import { Title } from "../../../components";
import "./_roadmap.scss";

const Roadmap = () => {
  const { width } = useWindowDimensions();
  // For Desktop
  const [yAxis1, setyAxis1] = React.useState(false);
  const [yAxis2, setyAxis2] = React.useState(false);
  const [yAxis3, setyAxis3] = React.useState(false);
  const [yAxis4, setyAxis4] = React.useState(false);
  // For Tab
  const [yAxis1Tab, setyAxis1Tab] = React.useState(false);
  const [yAxis2Tab, setyAxis2Tab] = React.useState(false);
  const [yAxis3Tab, setyAxis3Tab] = React.useState(false);
  const [yAxis4Tab, setyAxis4Tab] = React.useState(false);
  // For Mobile
  const [yAxis1mobi, setyAxis1mobi] = React.useState(false);
  const [yAxis2mobi, setyAxis2mobi] = React.useState(false);
  const [yAxis3mobi, setyAxis3mobi] = React.useState(false);
  const [yAxis4mobi, setyAxis4mobi] = React.useState(false);

  // For Desktop
  const setYaxis = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 0 && window.scrollY <= 2650) {
      setyAxis1(true);
    } else {
      setyAxis1(false);
    }
    if (window.scrollY >= 2650 && window.scrollY <= 2850) {
      setyAxis2(true);
    } else {
      setyAxis2(false);
    }
    if (window.scrollY >= 2850 && window.scrollY <= 3050) {
      setyAxis3(true);
    } else {
      setyAxis3(false);
    }
    if (window.scrollY >= 3050) {
      setyAxis4(true);
    } else {
      setyAxis4(false);
    }
  };
  // For Tab
  const setYaxisTab = () => {
    // For Tablet
    if (window.scrollY >= 0 && window.scrollY <= 3600) {
      setyAxis1Tab(true);
    } else {
      setyAxis1Tab(false);
    }
    if (window.scrollY >= 3600 && window.scrollY <= 3800) {
      setyAxis2Tab(true);
    } else {
      setyAxis2Tab(false);
    }
    if (window.scrollY >= 3800 && window.scrollY <= 4000) {
      setyAxis3Tab(true);
    } else {
      setyAxis3Tab(false);
    }
    if (window.scrollY >= 4000) {
      setyAxis4Tab(true);
    } else {
      setyAxis4Tab(false);
    }
  };
  // For Mobile
  const setYaxisMobi = () => {
    if (window.scrollY >= 0 && window.scrollY <= 3400) {
      setyAxis1mobi(true);
    } else {
      setyAxis1mobi(false);
    }
    if (window.scrollY >= 3400 && window.scrollY <= 3600) {
      setyAxis2mobi(true);
    } else {
      setyAxis2mobi(false);
    }
    if (window.scrollY >= 3600 && window.scrollY <= 3800) {
      setyAxis3mobi(true);
    } else {
      setyAxis3mobi(false);
    }
    if (window.scrollY >= 3800) {
      setyAxis4mobi(true);
    } else {
      setyAxis4mobi(false);
    }
  };

  window.addEventListener("scroll", setYaxis);
  window.addEventListener("scroll", setYaxisTab);
  window.addEventListener("scroll", setYaxisMobi);

  const data = [
    {
      ques: "Q1. 2022 – Stage 1 Launch",
      opt1: "Theia Prototype",
      opt2: "Community Fundraise",
      opt3: "NFT Drop",
      axis: yAxis1,
      axisTab: yAxis1Tab,
      axismobi: yAxis1mobi,
    },
    {
      ques: "Q2. 2022 – Stage 2 Launch",
      opt1: "Full Product",
      opt2: "Launch TEA Staking & Investing Functionality",
      opt3: null,
      axis: yAxis2,
      axisTab: yAxis2Tab,
      axismobi: yAxis2mobi,
    },
    {
      ques: "Q3. 2022 – Version 2 Launch",
      opt1: "Market Bonds Launch",
      opt2: "Bond Marketplace",
      opt3: "Bond Lending Market",
      axis: yAxis3,
      axisTab: yAxis3Tab,
      axismobi: yAxis3mobi,
    },
    {
      ques: "Q4. 2022 – DAO",
      opt1: "Full DAO Governance",
      opt2: "Proposal Marketplace",
      opt3: "Full PoSR functionality",
      axis: yAxis4,
      axisTab: yAxis4Tab,
      axismobi: yAxis4mobi,
    },
  ];
  return (
    <>
      <div className="roadmap">
        <div className="roadmap__left">
          <Title>It’s time to build</Title>
          <div style={{ margin: "1.5rem 0" }}>
            <BigButton Whpaper />
          </div>
        </div>
        <div className="roadmap__right">
          {/* For Desktop Version */}
          {width > 919 && (
            <>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`roadmap__question-container ${
                    item.axis ? "active-roadmap" : "not-active-roadmap"
                  }`}
                >
                  <div className="roadmap__question">{item.ques}</div>
                  <ul>
                    <li className="roadmap__option">
                      <AiTwotonePoundCircle className="roadmap__circle-icon" />
                      {item.opt1}
                    </li>
                    <li className="roadmap__option">
                      <AiTwotonePoundCircle className="roadmap__circle-icon" />
                      {item.opt2}
                    </li>
                    {item.opt3 !== null && (
                      <li className="roadmap__option">
                        <AiTwotonePoundCircle className="roadmap__circle-icon" />
                        {item.opt3}
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </>
          )}
          {/* For Tablet Version */}
          {width < 920 && width > 424 && (
            <>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`roadmap__question-container ${
                    item.axisTab ? "active-roadmap" : "not-active-roadmap"
                  }`}
                >
                  <div className="roadmap__question">{item.ques}</div>
                  <ul>
                    <li className="roadmap__option">
                      <AiTwotonePoundCircle className="roadmap__circle-icon" />
                      {item.opt1}
                    </li>
                    <li className="roadmap__option">
                      <AiTwotonePoundCircle className="roadmap__circle-icon" />
                      {item.opt2}
                    </li>
                    {item.opt3 !== null && (
                      <li className="roadmap__option">
                        <AiTwotonePoundCircle className="roadmap__circle-icon" />
                        {item.opt3}
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </>
          )}
          {/* For Mobile Version */}
          {width < 423 && (
            <>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`roadmap__question-container ${
                    item.axismobi ? "active-roadmap" : "not-active-roadmap"
                  }`}
                >
                  <div className="roadmap__question">{item.ques}</div>
                  <ul>
                    <li className="roadmap__option">
                      <AiTwotonePoundCircle className="roadmap__circle-icon" />
                      {item.opt1}
                    </li>
                    <li className="roadmap__option">
                      <AiTwotonePoundCircle className="roadmap__circle-icon" />
                      {item.opt2}
                    </li>
                    {item.opt3 !== null && (
                      <li className="roadmap__option">
                        <AiTwotonePoundCircle className="roadmap__circle-icon" />
                        {item.opt3}
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
