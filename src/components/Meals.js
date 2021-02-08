const Meals = ({ data }) => {
  const popular = data.popular;
  const description = data.description;

  return (
    <div className="meal">
      <div className="leftPart">
        <h4>{data.title}</h4>
        {}
        <p>{description.substring(0, 60)}</p>
        <span>{data.price} € </span>
        {popular && <span class="popular"> Populaire</span>}
      </div>
      <div className="rightPart">
        <img src={data.picture} alt="" />
      </div>
    </div>
  );
};
export default Meals;
