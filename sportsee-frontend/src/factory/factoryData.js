import {
  mainData,
  activityData,
  averageSessionData,
  performanceData,
} from "./model/models";

/**
 * @function UserServices
 * @description update state for each factory
 */

class factoryData {
  constructor(
    api,
    { setMainData, setActivity, setAverageSession, setPerformance }
  ) {
    switch (api.name) {
      case "USER_MAIN_DATA":
        return new mainData(api.value, setMainData);
      case "USER_ACTIVITY":
        return new activityData(api.value, setActivity);
      case "USER_AVERAGE_SESSIONS":
        return new averageSessionData(api.value, setAverageSession);
      case "USER_PERFORMANCE":
        return new performanceData(api.value, setPerformance);
      default:
        return console.error("error we have not found the data");
    }
  }
}

export default factoryData;
