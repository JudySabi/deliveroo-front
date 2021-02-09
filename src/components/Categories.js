import Meals from "./Meals";
import SideBar from "./SideBar";

const Categories = ({ data }) => {
  const meals = data.meals; // tableau meals que je map plus bas

  return (
    <>
      {meals.length > 0 && (
        <div className="categorie">
          <h3>{data.name}</h3>
          <div className="meals">
            {meals.map((elem) => {
              // je souhaite mapper le tableau meals de mon data
              return <Meals key={elem.id} data={elem} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Categories;
