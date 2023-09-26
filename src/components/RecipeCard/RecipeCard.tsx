import { Recipe } from "../../types";
import './RecipeCard.css'
import HeartContainer from "../HeartContainer/HeartContainer";

interface RecipeProps {
    recipe: Recipe
}

const RecipeCard = ({recipe}: RecipeProps) => {

    const ingredientsList = recipe.ingredients.map(x => <p id="recipe-card-ingredient">{x}</p>);

    return (
        <div id="recipe-card-container">
            <h3 id="recipe-card-title">{recipe.name}</h3>
            <hr/>
            <HeartContainer numHearts={recipe.health_restored}/>
            {ingredientsList}
        </div>
    )
}

export default RecipeCard;