import {act, render, screen} from "@testing-library/react";
import RecipesApp from "./RecipesApp";

import {wait} from "@testing-library/user-event/dist/utils";
import apiClient from "../common/apiClient";

const mockedRecipes = [{
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
},
    {
        "id": 1,
        "name": "paella",
        "description": "Put it in the oven",
        "ingredients": [
            {
                "name": "dough"
            },
            {
                "name": "cheese"
            },
            {
                "name": "tomato"
            }
        ]
    }
]

jest.mock("../common/apiClient")




describe('Recipes', () => {
    apiClient.get.mockResolvedValue((params) => {
        return mockedRecipes
    })
    test('recipe get list api should be called on load', async () => {
        act(() => {
            render(<RecipesApp/>)
        })
        await wait(() => {
            screen.findByTestId(/recipe/i)
            expect(apiClient.get).toHaveBeenCalledTimes(1)
        })
    })

    test('recipe list should be populated on load', async () => {
        act(() => {
            render(<RecipesApp/>)
        })

        await wait(() => {
            const recipeList = screen.queryAllByTestId(/recipe-#[0-9]/)
            expect(recipeList).toHaveLength(mockedRecipes.length)
        })
    })

    test('recipe renders correctly', async () => {
        act(() => {
            render(<RecipesApp/>)
        })
        await wait(() => {
            const recipeList = screen.queryAllByTestId(/recipe-#[0-9]/)
            recipeList.forEach(renderedRecipe => {
                const recipe = mockedRecipes.find(mock => mock.id == renderedRecipe.id);
                expect(renderedRecipe.name).toEqual(recipe.name)
                expect(renderedRecipe.description).toEqual(recipe.description)
                expect(renderedRecipe.ingredients.length).toEqual(recipe.ingredients.length)
                recipe.ingredients.forEach(ingredient => {
                    expect(ingredient.name).toBeInTheDocument()
                })
            })
            expect(recipeList).toHaveLength(mockedRecipes.length)
        })

    })
})