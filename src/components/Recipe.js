import React from "react";
import {Link} from "react-router-dom"
import apiClient from "../common/apiClient";

function Recipe(props) {
    function deleteRecipe() {
        if (window.confirm("Are you sure?")) {
            async function remove() {
                await apiClient.remove(props.value.id)
                alert("Recipe deleted!")
                props.refreshList()
            }

            remove()
        }

    }

    return (
        <div data-testid={"recipe"+props.value.id}>
            <h2>{props.value.name}</h2>
            <button onClick={deleteRecipe}>🗑️</button>
            <Link to={"/" + props.value.id}>
                <button>✏️</button>
            </Link>
            <p>{props.value.description}</p>
            {props.value.ingredients.map(function (ingredient, idx) {
                return (<li key={idx}>{ingredient.name}</li>)
            })}
        </div>
    )
}

export default Recipe;