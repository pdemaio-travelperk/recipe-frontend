import RecipeForm from "./RecipeForm";
import {act, fireEvent, render, screen} from "@testing-library/react";
import apiClient from "../common/apiClient";
import {wait} from "@testing-library/user-event/dist/utils";

const mockRecipe = {
    "id": 8,
    "name": "pizza",
    "description": "pizzaaaa",
    "ingredients": [
        {
            "name": "tomate"
        },
        {
            "name": "queso"
        }
    ]
}

jest.mock("../common/apiClient")



describe("<RecipeForm />", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    test("Form is empty when creating new recipe", () => {
        render(<RecipeForm/>)
        const nameInput = screen.getByLabelText("recipe-name")
        const descriptionInput = screen.getByLabelText("recipe-description")
        const ingredientInput = screen.getByLabelText("addIngredient")
        const saveButton = screen.getByLabelText("save")

        expect(nameInput).toHaveValue("")
        expect(descriptionInput).toHaveValue("")
        expect(ingredientInput).toHaveValue("")
        expect(saveButton).toBeDisabled()
    })

    test("Form has data when editing recipe", async () => {
        apiClient.getById.mockResolvedValue(mockRecipe)
        render(<RecipeForm id="8"/>)

        await wait(() => {
            const nameInput = screen.getByLabelText("recipe-name")
            const descriptionInput = screen.getByLabelText("recipe-description")
            const saveButton = screen.getByLabelText("save")
            expect(apiClient.getById).toHaveBeenCalledTimes(1)
            expect(nameInput).toHaveValue(mockRecipe.name)
            expect(descriptionInput).toHaveValue(mockRecipe.description)
            expect(saveButton).toBeEnabled()
        })
    })

    test("Patch recipe when edit", async () => {
        apiClient.getById.mockResolvedValue(mockRecipe)
        render(<RecipeForm id="8"/>)

        await wait(() => {
            const nameInput = screen.getByLabelText("recipe-name")
            const descriptionInput = screen.getByLabelText("recipe-description")
            const ingredientInput = screen.getByLabelText("addIngredient")
            const saveButton = screen.getByLabelText("save")
            expect(apiClient.getById).toHaveBeenCalledTimes(1)
            expect(nameInput).toHaveValue(mockRecipe.name)
            expect(descriptionInput).toHaveValue(mockRecipe.description)
            expect(saveButton).toBeEnabled()
            fireEvent.change(nameInput, {target: {value: "test"}})
            fireEvent.click(saveButton)
            expect(apiClient.edit).toHaveBeenCalledTimes(1)

            const expectedRecipe = mockRecipe
            expectedRecipe.name = "test"
            expect(apiClient.edit).toHaveBeenLastCalledWith(JSON.stringify(expectedRecipe))
        })
    })

    test("Post recipe when new", () => {
        render(<RecipeForm/>)

        const nameInput = screen.getByLabelText("recipe-name")
        const descriptionInput = screen.getByLabelText("recipe-description")
        const ingredientInput = screen.getByLabelText("addIngredient")
        const addButton = screen.getByLabelText("add")
        const saveButton = screen.getByLabelText("save")


        fireEvent.change(nameInput, {target: {value: "test"}})
        fireEvent.change(descriptionInput, {target: {value: "test description"}})
        fireEvent.change(ingredientInput, {target: {value: "test ingredient"}})
        fireEvent.click(addButton)

        expect(saveButton).toBeEnabled()
        fireEvent.click(saveButton)
        expect(apiClient.save).toHaveBeenCalledTimes(1)

        const expectedRecipe = {name: "test", description: "test description", ingredients: [{name: "test ingredient"}]}
        expect(apiClient.save).toHaveBeenLastCalledWith(JSON.stringify(expectedRecipe))
    })
})