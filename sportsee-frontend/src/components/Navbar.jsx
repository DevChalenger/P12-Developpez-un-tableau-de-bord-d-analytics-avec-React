import { Link } from "react-router-dom";

/**
 * @function HorizontalNavbar
 * @description create the navbar of the header
 * @returns {HTMLElement} - element of the horizontal navbar
 */

function HorizontalNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <a href="#/">Profil</a>
        </li>
        <li>
          <a href="#/">Réglage</a>
        </li>
        <li>
          <a href="#/">Communauté</a>
        </li>
      </ul>
    </nav>
  );
}

export default HorizontalNavbar;
