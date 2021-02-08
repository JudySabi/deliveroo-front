import Meals from "./Meals";

const Categories = ({ data, isLoading }) => {
  const meals = data.meals;
  console.log(meals); // je récupère bien mon tableau dans mon console.log
  return (
    <div>
      <h3 className="categories">{data.name}</h3>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        meals.map((elem) => {
          // je souhaite mapper le tableau meals de mon data
          return <div key={elem.id}>{elem}</div>;
          // <Meals data={data}/>
        })
      )}
    </div>
  );
};
export default Categories;
