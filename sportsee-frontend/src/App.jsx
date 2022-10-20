import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ExistData from "./utils/ExistData";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Navigation>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/dashboard/:userId" element={<ExistData />} />
          <Route path="*" element={<NotFound />} />
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
