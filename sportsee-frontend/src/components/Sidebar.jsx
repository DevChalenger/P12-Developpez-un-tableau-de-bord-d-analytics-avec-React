import SidebarItems from "./SidebarItems";
import CurrentYear from "../utils/CurrentYear";

/**
 * @function HeaderHorizontal
 * @description create the sidebar of the app
 * @returns {HTMLElement} - element of the sidebar
 */

function HeaderVertical() {
  return (
    <header className="vertical-navbar">
      <SidebarItems></SidebarItems>
      <div className="block-copyright">
        <p>
          Copiryght, SportSee <CurrentYear></CurrentYear>
        </p>
      </div>
    </header>
  );
}

export default HeaderVertical;
