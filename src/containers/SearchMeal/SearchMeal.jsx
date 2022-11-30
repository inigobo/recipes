import React, { useEffect, useState } from "react";
import { bringBySearch } from '../../services/apiCalls'
import "./SearchMeal.css";
import MealCard from '../../components/MealCard/MealCard'

const Search = () => {
  const [meals, setMeals] = useState([]);
  const [searchInput, setSearchInput] = useState("");
//   const [selected, setSelected] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    async function fecthData() {
      let response = await bringBySearch(searchInput);
      setMeals(response);
    }
    fecthData();
  }, [searchInput]);

//   const selectMeal = (meal) => {
//     setSelected(meal);
//   };

  return (
    <div className="searchPage">
      <div className="leftside">
        <div className="searchBar">
          <input
            className="searchInput"
            placeholder="Search any meal!"
            type="text"
            name="input"
            id="input"
            title="input"
            onChange={(event) => {
              handleSearchInput(event);
            }}
          ></input>
        </div>
      </div>
      <div className="rightside">
        <div className="showContainer">
        <div className="searchResults">
            {
                meals.length > 0 &&

          meals.map((meal) => {
            return (
                <MealCard value={meal} key={meal.idMeal} />
            );
          })}
        </div>
      </div>
      {/* <div className="clickMovie">
            {
                selected.id !== undefined &&
                <MealCard meal={selected} />
            }
      </div> */}
      </div>
    </div>
  );
};

export default Search;
