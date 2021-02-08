const Meals = ({ data }) => {
  const popular = data.popular;
  const description = data.description;
  const picture = data.picture;

  return (
    <div className="meal">
      <div className="leftPart">
        <h4>{data.title}</h4>
        <p>{description.substring(0, 60)}</p>
        <span>{data.price} € </span>
        {popular && (
          <span class="popular">
            <i class="fas fa-star"></i> Populaire
          </span>
        )}
      </div>
      <div className="rightPart" style={{ marginRight: !picture && "130px" }}>
        {data.picture && <img src={picture} alt="" />}
      </div>
    </div>
  );
};
export default Meals;
