import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Sidebar></Sidebar>
        <Navigation>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/dashboard/:userId"
            element={<Dashboard></Dashboard>}
          ></Route>
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
