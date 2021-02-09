import "../assets/css/style.scss";
import axios from "axios";
import { useState, useEffect } from "react";
// COMPONENTS :
import Header from "./Header";
import Restaurant from "./Restaurant";
import SideBar from "./SideBar";
import Categories from "./Categories";

function App() {
  const [data, setData] = useState({}); // plus bas je stocke dans mon state "data" récupérer via le back !
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/");
        setData(response.data); // je récupère le data du back !
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* ----------- TOPBAR ------------*/}
      <div className="topBar">
        <Header />

        {isLoading ? (
          <span>En cours de chargement... </span>
        ) : (
          <Restaurant data={data} />
        )}
      </div>

      {/* ----------- MENUS & PANIER ------------*/}
      <div className="container">
        <div className="categories">
          {" "}
          {/* Menu */}
          {isLoading ? (
            <span>En cours de chargement... </span>
          ) : (
            data.categories.map((elem, index) => {
              //categorie est un tableau dans le data.json
              return (
                <Categories
                  data={elem}
                  key={index}
                  // states à récuperer
                  cart={cart}
                  setCart={setCart}
                />
              );
            })
          )}
        </div>
        <SideBar cart={cart} /> {/* Panier */}
      </div>
    </>
  );
}

export default App;
