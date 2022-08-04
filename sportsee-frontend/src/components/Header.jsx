import Navbar from "./Navbar";
import "../styles/css/header.css";
import { ReactComponent as Logo } from "../assets/sportsee-logo.svg";

/**
 * @function HeaderHorizontal
 * @description create the header of the app
 * @returns {HTMLElement} - element of the header
 */

function HeaderHorizontal() {
  return (
    <header className="horizontal-navbar">
      <div className="logo-sportsee">
        <Logo></Logo>
      </div>
      <Navbar></Navbar>
    </header>
  );
}

export default HeaderHorizontal;
