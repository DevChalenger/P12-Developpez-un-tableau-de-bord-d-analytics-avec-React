import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

function DashboardRadar({ userPerformance }) {
  const performance = userPerformance.data;

  function reversePerformance(performance) {
    let reverse = [];

    for (let index = performance.length - 1; index >= 0; index--) {
      reverse.push(performance[index]);
    }
    return reverse;
  }
  function formatedKind(kind) {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return false;
    }
  }

  return (
    <article className="dashboard-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="75%" data={reversePerformance(performance)}>
          <PolarGrid radialLines={false} stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey={"kind"}
            tickLine={false}
            stroke="#FFFFFF"
            tickFormatter={formatedKind}
          />

          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}

DashboardRadar.propTypes = {
  userPerformance: PropTypes.object.isRequired,
};

export default DashboardRadar;
