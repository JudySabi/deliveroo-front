// import { useState } from "react";

const SideBar = ({ cart, setCart }) => {
  console.log(cart);
  // récupère ici les meals clickés pour les afficher ci dessous

  return (
    <div className="sidebar">
      <button>Valider mon panier</button>
      {cart.length === 0 ? ( // si mon panier est vide
        <p className="emptyBasket">Votre panier est vide</p>
      ) : (
        cart.map((elem, index) => {
          const { id, title, price, amount } = elem;
          console.log(elem);
          return amount === 0 ? (
            // si amount === 0 alors index delete
            <></>
          ) : (
            <div key={id} className="cart">
              <div>
                <i
                  class="fas fa-minus-circle"
                  onClick={() => {
                    const newCart = [...cart];
                    newCart[index].amount--;
                    setCart(newCart);
                  }}
                ></i>
                <p>{amount}</p>
                <i
                  class="fas fa-plus-circle"
                  onClick={() => {
                    const newCart = [...cart];
                    // nouveau tableau -> chercher l'index dans laquelle je suis
                    newCart[index].amount++;
                    setCart(newCart);
                  }}
                ></i>
                <span>{title}</span>
              </div>
              <span>{price} €</span>
            </div>
          );
        })
      )}
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
