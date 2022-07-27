import {
  Tooltip,
  BarChart,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
  YAxis,
} from "recharts";

function DashboardActivity({ userActivity }) {
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
            <CartesianGrid vertical={false} strokeDasharray="3" />
            <Tooltip content={<CustomTooltip />}></Tooltip>
            <XAxis
              dataKey="day"
              tickLine={false}
              dy={15}
              stroke={"#9B9EAC"}
            ></XAxis>
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              dx={40}
              stroke={"#9B9EAC"}
            ></YAxis>
            <Bar
              dataKey="kilogram"
              barSize={10}
              fill="#282D30"
              radius={[4, 4, 0, 0]}
            />
            <Bar
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

export default DashboardActivity;
