import {
  RadialBarChart,
  ResponsiveContainer,
  RadialBar,
  PolarAngleAxis,
  Legend,
} from "recharts";

function DashboardPieChart({ todayScore }) {
  const percentScore = [{ score: Math.round(todayScore * 100) }];
  console.log(percentScore[0].score);
  return (
    <article className="dashboard-pie-chart">
      <header className="dashboard-pie-chart-header">
        <h3>Score</h3>
      </header>
      <section className="dashboard-pie-chart-section">
        <ResponsiveContainer width="99%" height={"100%"}>
          <RadialBarChart
            width="100%"
            height="100%"
            innerRadius={110}
            startAngle={90}
            endAngle={450}
            data={percentScore}
            fill={"blue"}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              dataKey="score"
              fill="#FF0000"
              paddingAngle={10}
              cornerRadius={20}
              className="test"
            ></RadialBar>
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="dashboard-pie-chart-circle">
          <h4>{percentScore[0].score}%</h4>
          <p>de votre objectif</p>
        </div>
      </section>
    </article>
  );
}

export default DashboardPieChart;
