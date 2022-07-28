import { useParams } from "react-router-dom";
import DashboardActivity from "../components/DashboardActivity";
import DashboardHeader from "../components/DashboardHeader";
import DashboardNutrition from "../components/DashboardNutrition";
import DashBoardLineChart from "../components/DashBoardLineChart";
import DashboardPieChart from "../components/DashboardPieChart";
import DashboardRadar from "../components/DashboardRadar";
import UserMockedServices from "../services/UserMockedServices";
import "../styles/css/dashboard.css";

//import icon for nutrition section
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

function Dashboard() {
  const { id } = useParams();
  const { userMainData, userActivity, userAverageSession, userPerformance } =
    UserMockedServices(id);

  return (
    <main className="dashboard-container">
      <DashboardHeader
        firstName={userMainData.userInfos.firstName}
        lastName={userMainData.userInfos.lastName}
      ></DashboardHeader>
      <section className="dashboard-section">
        <section className="dashboard-section-chart">
          <DashboardActivity
            userActivity={userActivity.sessions}
          ></DashboardActivity>
          <section className="dashboard-items-charts-section">
            <DashBoardLineChart
              userAverageSession={userAverageSession}
            ></DashBoardLineChart>
            <DashboardRadar userPerformance={userPerformance}></DashboardRadar>
            <DashboardPieChart
              todayScore={userMainData.todayScore}
            ></DashboardPieChart>
          </section>
        </section>
        <section className="dashboard-nutritions-section">
          <DashboardNutrition
            unit={"kcal"}
            name={"Calories"}
            value={userMainData.keyData.calorieCount}
            id="calories"
            image={energy}
          ></DashboardNutrition>
          <DashboardNutrition
            unit={"g"}
            name={"Proteines"}
            value={userMainData.keyData.proteinCount}
            id="protein"
            image={chicken}
          ></DashboardNutrition>
          <DashboardNutrition
            unit={"g"}
            name={"Glucides"}
            value={userMainData.keyData.carbohydrateCount}
            id="carbohydrate"
            image={apple}
          ></DashboardNutrition>
          <DashboardNutrition
            unit={"g"}
            name={"Lipides"}
            value={userMainData.keyData.lipidCount}
            id="lipid"
            image={cheeseburger}
          ></DashboardNutrition>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
