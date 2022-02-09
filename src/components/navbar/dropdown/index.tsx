import React from "react";
import Container from "../../container/Container";
import { navRoutes } from "../nav";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import logo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import Modal from "../../modal/Modal";
import "./_dropdown.scss";
import {
  hoverTxtBoxShadow,
  hoverTxtShadow,
  hoverZoom,
} from "../../../utils/Animations";

interface DropDownProps {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ showDropdown, setShowDropdown }: DropDownProps) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className={!showDropdown ? "dropDown-close" : "dropDown-open"}>
        <Container>
          <div className="dropdown__top">
            <div className="dropdown__top__item">
              <motion.div
                whileHover={hoverZoom}
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </motion.div>
            </div>
            <div
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              className="dropdown__top__item"
            >
              <RiCloseLine size={35} />
            </div>
          </div>

          <ul className="dropdown__links">
            <div className="dropdown__links__link">
              {navRoutes.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                  }}
                  className="DropdownLink"
                >
                  <motion.p whileHover={hoverTxtShadow}>
                    <Link to={item.route}>{item.name}</Link>
                  </motion.p>
                </li>
              ))}
              <motion.p
                onClick={() => {
                  setShowModal(!showModal);
                  setShowDropdown(!showDropdown);
                }}
                whileHover={hoverTxtBoxShadow}
                className="drp-dwn-mt2 dropdown-big-button"
              >
                Get Early Access
              </motion.p>
            </div>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Dropdown;
