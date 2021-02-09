const Meals = ({ data, key, newMeal, setIdMeal }) => {
  const popular = data.popular;
  const description = data.description;
  const picture = data.picture;

  return (
    <div
      className="meal"
      key={key}
      // je souhaite stocké mon id du meal afin de le récupérer dans App.js puis le stocker dans mon panier (sidebar)
      onClick={() => {
        // const mealBasket = { id: data.id };
        newMeal.push(mealBasket);
        setIdMeal(newMeal);
        console.log(newMeal);
      }}
    >
      <div className="leftPart">
        <h4>{data.title}</h4>
        <p>{description.substring(0, 60)}</p>{" "}
        {/* substring --> affiche que les 60 premiers caractères */}
        <span>{data.price} € </span>
        {/* si popular est true alors il m'affiche le span si dessous */}
        {popular && (
          <span class="popular">
            <i class="fas fa-star"></i> Populaire
          </span>
        )}
      </div>
      {/* si l'img n'est pas existante alors il me fait un margin right */}
      <div className="rightPart" style={{ marginRight: !picture && "130px" }}>
        {data.picture && <img src={picture} alt="" />}
      </div>
    </div>
  );
};
export default Meals;
