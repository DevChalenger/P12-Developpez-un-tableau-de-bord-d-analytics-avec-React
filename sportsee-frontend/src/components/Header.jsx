import Navbar from "./Navbar";
import "../styles/css/header.css";
import { ReactComponent as Logo } from "../assets/sportsee-logo.svg";

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
