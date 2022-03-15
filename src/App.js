import './App.css';
import RecipesApp from "./components/RecipesApp";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import NewRecipe from "./components/NewRecipe";
import EditRecipe from "./components/EditRecipe";

function App() {
    return (
        <div className="App">
            <h1>Recipes</h1>
            <Navbar/>
            <Routes>
                <Route path="/new" element={<NewRecipe/>}/>
                <Route path="/:id" element={<EditRecipe/>}/>
                <Route path="/" element={<RecipesApp/>}/>
            </Routes>
        </div>
    );
}

export default App;
