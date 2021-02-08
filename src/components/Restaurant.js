const Restaurant = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="leftPart">
        <h2>{data.restaurant.name}</h2>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="rightPart">
        <img src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default Restaurant;
