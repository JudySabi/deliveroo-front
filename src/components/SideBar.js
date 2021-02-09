const SideBar = ({ idMeal }) => {
  // récupère ici les meals clickés pour les afficher ci dessous

  return (
    <div className="sidebar">
      <button>Valider mon panier</button>
      <p>{idMeal}</p>
      {/* {idMeal.map((elem, index) => {
        <div key={index}>{elem.id}</div>;
      })} */}
      {/* <p className="emptyBasket">Votre panier est vide</p> */}
    </div>
  );
};

export default SideBar;
