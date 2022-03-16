import React from "react";
import {Link} from "react-router-dom"
import apiClient from "../common/apiClient";
import {Card, ListItem, SmallButton} from "../common/styled";

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
        <Card data-testid={"recipe"+props.value.id}>
            <h2>{props.value.name}</h2>
            <SmallButton onClick={deleteRecipe}>🗑️</SmallButton>
            <Link to={"/" + props.value.id}>
                <SmallButton>✏️</SmallButton>
            </Link>
            <p>{props.value.description}</p>
            {props.value.ingredients.map(function (ingredient, idx) {
                return (<ListItem key={idx}>{ingredient.name}</ListItem>)
            })}
        </Card>
    )
}

export default Recipe;