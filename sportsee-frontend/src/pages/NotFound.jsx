import { Link } from "react-router-dom";
import "../styles/css/notfound.css";

const NotFound = () => {
  return (
    <main className="notfound-container">
      <section className="notfound-section">
        <h2 className="notfound-title">404 Not Found</h2>
        <Link to={"/"} className="notfound-link">
          redirect to home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
