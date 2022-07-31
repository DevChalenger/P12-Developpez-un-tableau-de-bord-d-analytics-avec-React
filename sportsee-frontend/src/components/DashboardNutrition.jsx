import PropTypes from "prop-types";

function DashboardNutrition({ value, id, name, image, unit }) {
  return (
    <article className={`nutrition-${id} nutrition-item`} id={id}>
      <div className={`nutrition-icon nutrition-icon-${id}`}>
        <img src={image} alt={id + " icon"}></img>
      </div>
      <div className="nutrition-text">
        <p className="nutrition-value">{value + unit}</p>
        <p className="nutrition-unit">{name}</p>
      </div>
    </article>
  );
}

DashboardNutrition.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default DashboardNutrition;
