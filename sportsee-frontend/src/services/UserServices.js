import axios from "axios";

function UserServices() {
  async function UserData() {
    await axios
      .get("http://localhost:8800/user/12/activity")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log(false);
      });
  }
}

export default UserServices;
