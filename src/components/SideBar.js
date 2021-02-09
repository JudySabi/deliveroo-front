import { useState } from "react";

const SideBar = ({ cart, amount }) => {
  // récupère ici les meals clickés pour les afficher ci dessous

  const [counter, setCounter] = useState([0]);

  return (
    <div className="sidebar">
      <button>Valider mon panier</button>
      {cart.map((elem) => {
        const { id, title, price, amount } = elem;
        console.log(counter);
        return (
          <div key={id} className="cart">
            <div>
              <i
                class="fas fa-minus-circle"
                onClick={() => {
                  const newCounter = [...counter];
                  newCounter[amount]--;
                  setCounter(newCounter);
                }}
              ></i>
              <p>{amount}</p>
              <i
                class="fas fa-plus-circle"
                onClick={() => {
                  const newCounter = [...counter];
                  newCounter[amount]++;
                  setCounter(newCounter);
                }}
              ></i>
              <span>{title}</span>
            </div>
            <span>{price} €</span>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;

// {!cart ? (
//   <p className="emptyBasket">Votre panier est vide</p>
// ) : (
//   cart.map((elem) => {

//     const { id, title, price } = elem;
//     return (
//       <div key={id} className="cart">
//         <span>{title}</span>
//         <span>{price} €</span>
//       </div>
//     );
//   })
// )}
