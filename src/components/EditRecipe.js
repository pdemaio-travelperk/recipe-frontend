import {useParams} from "react-router-dom";
import RecipeForm from "./RecipeForm";

export default function EditRecipe() {
    const {id} = useParams()

    return <RecipeForm id={id} />
}