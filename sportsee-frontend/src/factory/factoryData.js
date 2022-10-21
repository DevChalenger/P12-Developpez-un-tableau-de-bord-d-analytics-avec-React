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
        return setMainData(api.value);
      case "USER_ACTIVITY":
        return setActivity(api.value);
      case "USER_AVERAGE_SESSIONS":
        return setAverageSession(api.value);
      case "USER_PERFORMANCE":
        return setPerformance(api.value);
      default:
        return console.log("error we have not found the data");
    }
  }
}

export default factoryData;
