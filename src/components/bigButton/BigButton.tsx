import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Modal from "../modal/Modal";
import { hoverTxtBoxShadow } from "../../utils/Animations";
import "./_bigButton.scss";

const BigButton = ({ Whpaper }: any) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {!Whpaper && (
        <motion.button
          onClick={() => {
            setShowModal(!showModal);
          }}
          whileHover={hoverTxtBoxShadow}
          className="big-button"
        >
          Get Early Access
        </motion.button>
      )}{" "}
      {Whpaper && (
        <motion.button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          whileHover={hoverTxtBoxShadow}
          className="big-button"
        >
          <a
            target="_blank"
            href="https://theia-finance.gitbook.io/whitepaper/"
            rel="noreferrer"
          >
            See Whitepaper
          </a>
          <FiArrowUpRight style={{ fontSize: "18px", marginLeft: "12px" }} />
        </motion.button>
      )}
    </>
  );
};

export default BigButton;
