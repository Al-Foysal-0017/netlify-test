import React from "react";
import "./_navbar.scss";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../container/Container";
import logo from "../../../assets/svg/logo.svg";
import Modal from "../../modal/Modal";
import {
  hoverTxtBoxShadow,
  hoverTxtShadow,
  hoverZoom,
} from "../../../utils/Animations";

export const navRoutes = [
  { name: "Our Vision", route: "/our-vision" },
  { name: "Drops", route: "/drops" },
];

interface NavProps {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ showDropdown, setShowDropdown }: NavProps) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <nav style={{ width: "100%" }}>
        <Container>
          <div className="navbar">
            <ul className="navbar__container">
              <div className="navbar__container__left">
                <div className="navbar__container__left__logo">
                  <Link to="/">
                    <motion.img whileHover={hoverZoom} src={logo} alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="navbar__container__right">
                {navRoutes.map((item) => (
                  <li
                    key={item.name}
                    className="navbar__container__right__link"
                  >
                    <motion.p whileHover={hoverTxtShadow}>
                      <Link to={item.route}>{item.name}</Link>
                    </motion.p>
                  </li>
                ))}
                <motion.p
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  whileHover={hoverTxtBoxShadow}
                  className="margin-l-1 nav-big-button"
                >
                  Get Early Access
                </motion.p>
              </div>
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
                className="NavbarMenuBtn"
              >
                <RiMenu3Line size={32} />
              </div>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
