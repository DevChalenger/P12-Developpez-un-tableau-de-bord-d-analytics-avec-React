import { ReactComponent as Spinner } from "../assets/dumbbell-svgrepo-com.svg";

/**
 * @function Loader
 * @description create the Loader of the dashboard
 * @returns {HTMLElement} - element of the Loader
 */

function Loader() {
  return (
    <div className="dashboard-loader">
      <div className="dashboard-loader-animation">
        <Spinner className="dashboard-loader-spinner"></Spinner>
      </div>
      <div className="dashboard-loader-message">
        Veuillez patienter quelques instants...
      </div>
    </div>
  );
}

export default Loader;
