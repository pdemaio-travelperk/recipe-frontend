import React, {useState} from "react";
import Recipe from "./Recipe";

function RecipeList() {
    const [recipes, setRecipes] = useState([])
    return (
        <div>
            {recipes.map(function (recipe, idx) {
                return (<Recipe value={recipe}/>);
            })}
        </div>
    )
}

export default RecipeList;