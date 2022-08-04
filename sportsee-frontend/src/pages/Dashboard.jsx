//import react tool
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

//import service datas
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
  //get userId from current url
  const { userId } = useParams();

  //Conditional state
  const [isMocked, setIsMocked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  //state data
  const [mainData, setMainData] = useState();
  const [activity, setActivity] = useState();
  const [averageSession, setAverageSession] = useState();
  const [performance, setPerformance] = useState();

  useEffect(() => {
    setIsMocked(false);
    async function apiCall() {
      //Import data from api services
      const apiService = UserServices(userId);

      const principalData = await apiService.userMainData();
      const activityData = await apiService.userActivity();
      const averageSessionData = await apiService.userAverageSession();
      const performanceData = await apiService.userPerformance();

      //Import mocked services data
      const {
        userMainData,
        userActivity,
        userAverageSession,
        userPerformance,
      } = UserMockedServices(userId);

      //Check if the data it's mocked
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

      setIsLoaded(true);
    }
    apiCall();
  }, [userId, isMocked, isLoaded]);

  //Check if the data it's loaded
  if (isLoaded) {
    return (
      <main className="dashboard-container">
        <DashboardHeader
          firstName={mainData.userInfos.firstName}
        ></DashboardHeader>
        <section className="dashboard-section">
          <section className="dashboard-section-chart">
            <DashboardActivity
              userActivity={activity.sessions}
            ></DashboardActivity>
            <section className="dashboard-items-charts-section">
              <DashBoardLineChart
                userAverageSession={averageSession.sessions}
              ></DashBoardLineChart>
              <DashboardRadar
                userPerformance={performance.data}
              ></DashboardRadar>
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
