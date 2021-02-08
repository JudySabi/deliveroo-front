import Meals from "./Meals";

const Categories = ({ data, isLoading }) => {
  const meals = data.meals; // tableau meals que je map plus bas

  return (
    <>
      {meals && (
        <div className="categorie">
          <h3>{data.name}</h3>

          <div className="meals">
            {isLoading ? (
              <span>En cours de chargement... </span>
            ) : (
              meals.map((elem) => {
                // je souhaite mapper le tableau meals de mon data
                return <Meals key={elem.id} data={elem} />;
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Categories;
