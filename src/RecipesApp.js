import React from "react";
import Navbar from "./Navbar"
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

function RecipesApp() {
    return (
        <div>
            <SearchBar/>
            <Navbar/>
            <RecipeList/>
        </div>
    )
}

export default RecipesApp;