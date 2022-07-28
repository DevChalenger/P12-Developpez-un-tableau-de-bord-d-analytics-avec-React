import axios from "axios";

function UserServices(id) {
  async function UserData(id) {
    await axios
      .get(`http://localhost:8800/user/${id}/activity`)
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
