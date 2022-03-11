import React, {useState} from "react";

function Recipe() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            {ingredients.map(function (ingredient, idx) {
                return (<li key={idx}>{ingredient.name}</li>)
            })}
        </div>
    )
}

export default Recipe;