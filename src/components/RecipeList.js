import React from "react";
import Recipe from "./Recipe";

function RecipeList(props) {
    return (
        <div aria-label="recipe-list">
            {props.loading && <div data-testid="loading">Loading...</div>}
            {props.recipes && props.recipes.map(function (recipe, idx) {
                return (<Recipe value={recipe} key={idx} refreshList={props.refresh}/>);
            })}
        </div>
    )
}

export default RecipeList;