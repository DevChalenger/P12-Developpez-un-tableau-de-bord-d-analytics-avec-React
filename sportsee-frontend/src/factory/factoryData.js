class factoryData {
  constructor(
    api,
    { setMainData, setActivity, setAverageSession, setPerformance },
    { principalData, activityData, averageSessionData, performanceData }
  ) {
    switch (api) {
      case "USER_MAIN_DATA":
        return setMainData(principalData);
      case "USER_ACTIVITY":
        return setActivity(activityData);
      case "USER_AVERAGE_SESSIONS":
        return setAverageSession(averageSessionData);
      case "USER_PERFORMANCE":
        return setPerformance(performanceData);
      default:
        return;
    }
  }
}

export default factoryData;
