import "../assets/css/style.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import Restaurant from "./Restaurant";
import SideBar from "./SideBar";
import Categories from "./Categories";

function App() {
  // plus bas je stocke dans mon state "data" récupérer via le back !
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // je récupère le data du back !
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="topBar">
        <Header />
        {isLoading ? (
          <span>En cours de chargement... </span>
        ) : (
          <Restaurant data={data} />
        )}
      </div>
      {/* ----------- MENUS ------------*/}
      <div className="container">
        <div className="categories">
          {isLoading ? (
            <span>En cours de chargement... </span>
          ) : (
            data.categories.map((elem, index) => {
              return (
                <Categories
                  data={elem}
                  key={index}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              );
            })
          )}
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
