import MockedData from "../__mocks__/data";
/**
 * @function UserMockedServices
 * @description Fetch user mocked datas
 * @return all user data types
 */

function UserMockedServices(userId) {
  if (userId !== undefined) {
    //
    const userMainData = MockedData.USER_MAIN_DATA.find(
      (user) => user.id === JSON.parse(userId)
    );

    const userActivity = MockedData.USER_ACTIVITY.find(
      (user) => user.userId === JSON.parse(userId)
    );

    const userAverageSession = MockedData.USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === JSON.parse(userId)
    );

    const userPerformance = MockedData.USER_PERFORMANCE.find(
      (user) => user.userId === JSON.parse(userId)
    );
    return { userMainData, userActivity, userAverageSession, userPerformance };
  } else {
    return console.log("data not found");
  }
}

export default UserMockedServices;
