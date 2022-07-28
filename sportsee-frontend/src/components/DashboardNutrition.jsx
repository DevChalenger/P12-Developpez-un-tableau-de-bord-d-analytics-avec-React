function DashboardNutrition({ value, id, name, image, unit }) {
  console.log(image);
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

export default DashboardNutrition;
