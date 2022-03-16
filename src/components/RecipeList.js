import React from "react";
import Recipe from "./Recipe";
import {CardList} from "../common/styled";

function RecipeList(props) {
    return (
        <CardList aria-label="recipe-list">
            {props.loading && <div data-testid="loading">Loading...</div>}
            {props.recipes && props.recipes.map(function (recipe, idx) {
                return (<Recipe value={recipe} key={idx} refreshList={props.refresh}/>);
            })}
        </CardList>
    )
}

export default RecipeList;