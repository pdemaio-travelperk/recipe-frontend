import userInput from "../hooks/userInput";
import React, {useEffect, useState} from "react";
import apiClient from "../common/apiClient";

function RecipeForm(params) {

    const id = params.id
    const [name, handleNameChange, resetName, setName] = userInput('')
    const [description, handleDescriptionChange, resetDescription, setDescription] = userInput('')
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient, cleanNewIngredient] = userInput("")
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)

    function init(){
        async function loadRecipe() {
            const data = await apiClient.getById(id)
            const recipeIngredients = data.ingredients.map(function (ingredient) {
                return ingredient.name
            })
            setIngredients(recipeIngredients)
            setName(data.name)
            setDescription(data.description)
            setLoading(false)
        }
        setLoading(true)
        loadRecipe()
    }

    useEffect(() => {
        if (id) {
            init()
        }
    }, [params])

    useEffect(() => {
        if (name !== "" && description !== "" && ingredients.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [name, description, ingredients])

    function addIngredient(e) {
        e.preventDefault()
        if (newIngredient && newIngredient !== "") {
            setIngredients([...ingredients, newIngredient])
            cleanNewIngredient()
        }
    }

    function remove(e) {
        let list = [...ingredients]
        list.splice(e.target.id, 1)
        setIngredients(list)
    }

    function save(e) {
        e.preventDefault()
        async function save(recipe) {
            if (id) {
                await apiClient.edit(id, JSON.stringify(recipe))
                alert("Saved!")
                init()
            } else {
                await apiClient.save(JSON.stringify(recipe))
                alert("Saved!")
                clean()
            }
        }

        let json = {
            name: name,
            description: description,
            ingredients: (ingredients.map(function (ingredient) {
                return {name: ingredient}
            }))
        }

        save(json)
    }

    function clean() {
        resetName()
        resetDescription()
        setIngredients([])
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && <form onSubmit={save}>

                <h2>Recipe</h2>
                Name: <input aria-label="recipe-name" onChange={handleNameChange} value={name}/>
                Description: <input aria-label="recipe-description" onChange={handleDescriptionChange} value={description}/>
                <h3>Ingredients</h3>
                {ingredients.map(function (ingredient, idx) {
                    return (<li key={idx}>{ingredient}
                        <button id={idx} onClick={remove}>❌</button>
                    </li>)
                })}
                Add new: <input aria-label="addIngredient" onChange={setNewIngredient} value={newIngredient}/>
                <button aria-label="add" onClick={addIngredient}>Add</button>
                <button aria-label="save" disabled={disabled} type="submit">Save</button>
            </form>
            }
        </div>
    )


}

export default RecipeForm