import axios from "axios";

/**
 * @function UserServices
 * @param {number} userId
 * @returns {Object}
 */
function UserServices(userId) {
  //Base url for the api
  const instance = axios.create({
    method: "GET",
    baseURL: "http://localhost:8800/",
  });
  async function userMainData() {
    try {
      const response = await instance.get(`user/${userId}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  }

  async function userActivity() {
    try {
      const response = await instance.get(`user/${userId}/activity`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function userAverageSession() {
    try {
      const response = await instance.get(`user/${userId}/average-sessions`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function userPerformance() {
    try {
      const response = await instance.get(`user/${userId}/performance`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  return { userMainData, userActivity, userAverageSession, userPerformance };
}

export default UserServices;
