const Meals = ({ data, key, setCart, cart, amount }) => {
  const popular = data.popular;
  const description = data.description;
  const picture = data.picture;

  const { id, title, price } = data;

  return (
    <div
      className="meal"
      key={key}
      // je souhaite stocké mon id du meal afin de le récupérer dans App.js puis le stocker dans mon panier (sidebar)
      onClick={() => {
        const mealBasket = {
          id: id,
          title: title,
          price: price,
          amount: 1,
        };
        const newMeal = [...cart];
        newMeal.push(mealBasket);
        setCart(newMeal);
      }}
    >
      <div className="leftPart">
        <h4>{data.title}</h4>
        <p>{description.substring(0, 60)}</p>
        {/* substring --> affiche que les 60 premiers caractères */}
        <span>{data.price} € </span>
        {/* si popular est true alors il m'affiche le span si dessous */}
        {popular && (
          <span className="popular">
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

// const newMealBasket = {...mealBasket, title: data.title} // copier un objet !!
