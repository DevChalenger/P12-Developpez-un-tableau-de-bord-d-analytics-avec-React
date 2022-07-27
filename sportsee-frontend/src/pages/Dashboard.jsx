import { useParams } from "react-router-dom";
import DashboardActivity from "../components/DashboardActivity";
import DashboardHeader from "../components/DashboardHeader";
import DashBoardLineChart from "../components/DashBoardLineChart";
import DashboardPieChart from "../components/DashboardPieChart";
import DashboardRadar from "../components/DashboardRadar";
import UserMockedServices from "../services/UserMockedServices";
import "../styles/css/dashboard.css";

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
        <DashboardActivity
          userActivity={userActivity.sessions}
        ></DashboardActivity>
        <section className="dashboard-section-chart">
          <DashBoardLineChart
            userAverageSession={userAverageSession}
          ></DashBoardLineChart>
          <DashboardRadar userPerformance={userPerformance}></DashboardRadar>
          <DashboardPieChart
            todayScore={userMainData.todayScore}
          ></DashboardPieChart>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
