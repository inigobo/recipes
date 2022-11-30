import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealShowcase from "./containers/MealShowcase/MealShowcase";
import Welcome from "./containers/Welcome/Welcome";
import Header from "./components/Header/Header";
import NewMealForm from './containers/NewMealForm/NewMealForm'
import SearchMeal from "./containers/SearchMeal/SearchMeal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/mealshowcase" element={<MealShowcase />} />
          <Route path="/newmealform" element={<NewMealForm />} />
          <Route path="/searchmeal" element={<SearchMeal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
