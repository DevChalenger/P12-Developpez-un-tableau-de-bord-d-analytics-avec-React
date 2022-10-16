import { useNavigate } from "react-router-dom";
import "../styles/css/home.css";
import { USER_MAIN_DATA } from "../__mocks__/data";

/**
 * @function Home
 * @description create the Home page
 * @returns html elements of the Home page
 */

function Home() {
  const navigate = useNavigate();

  /**
   * @type {Object}
   */

  const userData = USER_MAIN_DATA;

  return (
    <main className="home-container">
      {userData.map((user) => (
        <div className="user-redirection-container" key={user.id}>
          <p>
            Voulez-vous accéder au tableau de bord de <br />
          </p>

          <button
            className="user-redirection-button"
            onClick={() => {
              navigate(`/dashboard/${user.id}`);
            }}
          >
            <span>
              {user.userInfos.firstName} {user.userInfos.lastName}
            </span>
          </button>
        </div>
      ))}
    </main>
  );
}

export default Home;
