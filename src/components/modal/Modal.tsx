import React, { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { hoverZoom } from "../../utils/Animations";
import "./_model.scss";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const modalRef = useRef<any>();
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={modalRef}
          onClick={closeModal}
        >
          <motion.div variants={modal} className="modal">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="modal__cross-icon"
            >
              <RiCloseLine style={{ fontSize: "18px", cursor: "pointer" }} />
            </div>
            <div className="modal__title">Join the THEIAVERSE</div>
            <div className="modal__subtitle">
              Follow us on Twitter and join our Discord to get 15 free TEA token
              and get exclusive access to our platform and NFT mint.
            </div>
            <div className="modal__items-box">
              <a
                href="https://discord.com/invite/sjBjnQkEYP"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div className="modal__item-box" whileHover={hoverZoom}>
                  <span className="modal__item-box__link-name">
                    <SiDiscord className="modal__item-box__link-icon" />
                    Discord
                  </span>
                  <span className="modal__item-box__link-numbering">Step1</span>
                </motion.div>
              </a>
              <a
                href="https://twitter.com/Theia_Labs"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className="modal__item-box"
                  style={{ margin: "8px 0 20px 0" }}
                  whileHover={hoverZoom}
                >
                  <span className="modal__item-box__link-name">
                    <BsTwitter className="modal__item-box__link-icon" />
                    Twitter
                  </span>
                  <span className="modal__item-box__link-numbering">Step2</span>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
