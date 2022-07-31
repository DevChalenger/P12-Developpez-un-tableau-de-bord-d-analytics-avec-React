import {
  Tooltip,
  BarChart,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
  YAxis,
} from "recharts";

import PropTypes from "prop-types";
// @fu
function DashboardActivity({ userActivity }) {
  function CustomDate(data) {
    const monthShorten = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formateDate = data.split("-");
    const monthNumber = Number(formateDate[1]);
    const returnedData = `${monthShorten[monthNumber - 1]} ${formateDate[2]}`;
    return returnedData;
  }
  function CustomTooltip(data) {
    // console.log('CustomTooltip -> data', data)
    const { active, payload } = data;

    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilo-tooltip">{` ${payload[0].value}kg`}</p>
          <p className="kcal-tooltip">{` ${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  }
  return (
    <article className="dashboard-activity">
      <header className="dashboard-activity-header">
        <h2>Activité quotidienne</h2>
        <ul className="unit-of-measurement">
          <li>Poid (kg)</li>
          <li className="dashboard-activity-calories">
            Calories brûlées (kCal)
          </li>
        </ul>
      </header>
      <section className="dashboard-activity-section">
        <ResponsiveContainer width="99%" height={"100%"}>
          <BarChart
            data={userActivity}
            width="50%"
            height="50%"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={10}
            className="dashboard-activity-barchart"
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />}></Tooltip>
            <XAxis
              dataKey="day"
              tickLine={false}
              dy={15}
              stroke={"#9B9EAC"}
              tickFormatter={CustomDate}
            ></XAxis>

            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              domain={["dataMin -1", "dataMax +2"]}
              tickCount="3"
              tickSize="0"
              axisLine={false}
              dx={40}
              stroke={"#9B9EAC"}
            ></YAxis>
            <YAxis
              yAxisId="kcal"
              dataKey="calories"
              orientation="left"
              domain={["dataMin -100", "dataMax +100"]}
              tickLine={false}
              hide={true}
            />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              barSize={10}
              fill="#282D30"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              yAxisId="kcal"
              dataKey="calories"
              barSize={10}
              fill="#E60000"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </article>
  );
}

DashboardActivity.propTypes = {
  userActivity: PropTypes.array.isRequired,
};

export default DashboardActivity;
