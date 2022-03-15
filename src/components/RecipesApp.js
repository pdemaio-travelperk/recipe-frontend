import React, {useEffect, useState} from "react";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";
import apiClient from "../common/apiClient";

function RecipesApp() {

    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])

    function GetRecipes(term) {
        setName(term)
    }

    async function load() {
        setRecipes(await apiClient.get({name: name}))
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        load()
    }, [name]);

    return (
        <div>
            <SearchBar onSearch={GetRecipes}/>
            <RecipeList loading={loading} recipes={recipes} refresh={load}/>
        </div>
    )
}

export default RecipesApp;