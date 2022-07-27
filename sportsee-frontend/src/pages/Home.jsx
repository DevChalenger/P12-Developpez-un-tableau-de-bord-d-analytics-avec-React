import { useNavigate } from "react-router-dom";
import "../styles/css/home.css";
import { USER_MAIN_DATA } from "../__mocks__/data";

/**
 * @function Home
 * @description Create the Home page
 * @returns Html elements of the Home page
 */

function Home() {
  const navigate = useNavigate();
  /**
   * @type {Array}
   */
  const userData = USER_MAIN_DATA;
  return (
    <main className="home-container">
      {userData.map((user) => (
        <div className="user-redirection-container" key={user.id}>
          <p>
            Voulez-vous accéder au tableau de bord de <br />
            <span>
              {user.userInfos.firstName} {user.userInfos.lastName}
            </span>
          </p>

          <button
            className="user-redirection-button"
            onClick={() => {
              navigate(`/dashboard/${user.id}`);
            }}
          >
            Acceder à son tableau de bord
          </button>
        </div>
      ))}
    </main>
  );
}

export default Home;
