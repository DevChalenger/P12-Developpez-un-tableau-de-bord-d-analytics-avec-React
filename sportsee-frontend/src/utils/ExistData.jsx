import { useParams } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import { USER_MAIN_DATA } from "../__mocks__/data";

const ExistData = () => {
  const userData = USER_MAIN_DATA;
  const { userId } = useParams();
  const existId = userData.find((user) => parseInt(userId) === user.id);

  if (existId === undefined) {
    return <NotFound />;
  } else {
    return <Dashboard />;
  }
};

export default ExistData;
