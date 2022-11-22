import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Icons,
} from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Icons>
          <FontAwesomeIcon icon={faFirefox} />
        </Icons>
        <Bars />
        <NavMenu>
          <NavLink to="/employee" activeStyle>
            Employees
          </NavLink>
          <NavLink to="/services" activeStyle>
            Customers
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Machines
          </NavLink>
          <NavLink to="/account" activeStyle>
            Signup
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
