//import recharts
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

//import proptype
import PropTypes from "prop-types";

/**
 * @typedef UserPerformance
 * @type {Object}
 *  @property {number} value
 *  @property {number} kind
 */

/**
 * @function DashboardRadar
 * @description create dashboard radar component
 * @param {Array.<UserPerformance>} userPerformance performance objects
 * @returns {HTMLElement} element of dashboard radar component
 */

function DashboardRadar({ userPerformance }) {
  /**
   * @typedef Performance
   * @type {Object}
   *  @property {number} value
   *  @property {number} kind
   */

  /**
   * @function reversePerformance
   * @description reverse performance data
   * @param {Array.<Performance>} performance performance objects
   * @returns {Array} inversed data from param
   */

  function reversePerformance(performance) {
    let reverse = [];

    for (let index = performance.length - 1; index >= 0; index--) {
      reverse.push(performance[index]);
    }
    return reverse;
  }

  /**
   * @function formatedKind
   * @description format each kind
   * @param {number} kind
   * @returns {string} each name of kind
   */

  return (
    <article className="dashboard-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="75%"
          data={reversePerformance(userPerformance)}
        >
          <PolarGrid radialLines={false} stroke="#FFFFFF" />
          <PolarAngleAxis dataKey={"kind"} tickLine={false} stroke="#FFFFFF" />

          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}

DashboardRadar.propTypes = {
  userPerformance: PropTypes.array.isRequired,
};

export default DashboardRadar;
