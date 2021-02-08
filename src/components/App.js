import "../assets/css/style.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import Restaurant from "./Restaurant";

function App() {
  // plus bas je stocke dans mon state "data" récupérer via le back !
  const [data, setData] = useState([]);

  // je récupère le data du back !
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/");
        setData(response.data);
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
        {data.map((elem, index) => {
          return <div>{elem}</div>;
          // <Restaurant key={index} data={elem.restaurant} />;
        })}
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
