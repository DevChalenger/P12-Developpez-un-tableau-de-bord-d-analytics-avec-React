// import proptypes
import PropTypes from "prop-types";

/**
 * @function DashboardHeader
 * @description create dashboard header component
 * @param {string} firstName - first name of the user
 * @return {HTMLElement} element of dashboard header component
 */

function DashboardHeader({ firstName }) {
  return (
    <header className="dashboard-header">
      <h1 className="welcome-title">
        Bonjour <strong className="username-title">{firstName}</strong>
      </h1>
      <p className="yesterday-feat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}

DashboardHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
};
export default DashboardHeader;
