import axios from "axios";

//Base url for the api
const instance = axios.create({
  method: "GET",
  baseURL: "http://localhost:8800/",
});
function UserServices(userId) {
  async function userMainData() {
    try {
      const response = await instance.get(`user/${userId}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
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
