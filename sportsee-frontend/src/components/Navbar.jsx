import { Link } from "react-router-dom";

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
