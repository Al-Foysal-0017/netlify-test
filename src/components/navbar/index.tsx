import React, { useState } from "react";
import Navbar from "./nav";
import DropDown from "./dropdown/index";

const NavbarMain = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <>
      <DropDown showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
    </>
  );
};

export default NavbarMain;
