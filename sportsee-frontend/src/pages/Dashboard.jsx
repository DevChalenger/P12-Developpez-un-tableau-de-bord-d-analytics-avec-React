//import react
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//import children components
import DashboardActivity from "../components/DashboardActivity";
import DashboardHeader from "../components/DashboardHeader";
import DashboardNutrition from "../components/DashboardNutrition";
import DashBoardLineChart from "../components/DashBoardLineChart";
import DashboardPieChart from "../components/DashboardPieChart";
import DashboardRadar from "../components/DashboardRadar";
import Loader from "../components/Loader";

//services
import UserMockedServices from "../services/UserMockedServices";
import UserServices from "../services/UserServices";

//import style
import "../styles/css/dashboard.css";

//import icon for nutrition section
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

function Dashboard() {
  const { userId } = useParams();
  const [isMocked, setIsMocked] = useState();

  const [isLoaded, setIsLoaded] = useState(false);
  //state data
  const [mainData, setMainData] = useState();
  const [activity, setActivity] = useState();
  const [averageSession, setAverageSession] = useState();
  const [performance, setPerformance] = useState();

  useEffect(() => {
    setIsMocked(false);
    async function apiCall() {
      const principalData = await UserServices(userId).userMainData();
      const activityData = await UserServices(userId).userActivity();
      const averageSessionData = await UserServices(
        userId
      ).userAverageSession();
      const performanceData = await UserServices(userId).userPerformance();

      const {
        userMainData,
        userActivity,
        userAverageSession,
        userPerformance,
      } = UserMockedServices(userId);

      if (isMocked) {
        setMainData(userMainData);
        setActivity(userActivity);
        setAverageSession(userAverageSession);
        setPerformance(userPerformance);
      } else {
        setMainData(principalData);
        setActivity(activityData);
        setAverageSession(averageSessionData);
        setPerformance(performanceData);
      }

      /* setIsLoaded(true); */
    }
    apiCall();
  }, [userId, isMocked, isLoaded]);

  if (isLoaded) {
    return (
      <main className="dashboard-container">
        <DashboardHeader
          firstName={mainData.userInfos.firstName}
          lastName={mainData.userInfos.lastName}
        ></DashboardHeader>
        <section className="dashboard-section">
          <section className="dashboard-section-chart">
            <DashboardActivity
              userActivity={activity.sessions}
            ></DashboardActivity>
            <section className="dashboard-items-charts-section">
              <DashBoardLineChart
                userAverageSession={averageSession}
              ></DashBoardLineChart>
              <DashboardRadar userPerformance={performance}></DashboardRadar>
              <DashboardPieChart
                todayScore={mainData.todayScore || mainData.score}
              ></DashboardPieChart>
            </section>
          </section>
          <section className="dashboard-nutritions-section">
            <DashboardNutrition
              unit={"kcal"}
              name={"Calories"}
              value={mainData.keyData.calorieCount}
              id="calories"
              image={energy}
            ></DashboardNutrition>
            <DashboardNutrition
              unit={"g"}
              name={"Proteines"}
              value={mainData.keyData.proteinCount}
              id="protein"
              image={chicken}
            ></DashboardNutrition>
            <DashboardNutrition
              unit={"g"}
              name={"Glucides"}
              value={mainData.keyData.carbohydrateCount}
              id="carbohydrate"
              image={apple}
            ></DashboardNutrition>
            <DashboardNutrition
              unit={"g"}
              name={"Lipides"}
              value={mainData.keyData.lipidCount}
              id="lipid"
              image={cheeseburger}
            ></DashboardNutrition>
          </section>
        </section>
      </main>
    );
  } else {
    return (
      <main className="dashboard-container">
        <Loader></Loader>
      </main>
    );
  }
}

export default Dashboard;
