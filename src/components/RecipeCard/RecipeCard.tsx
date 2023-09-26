import { Recipe } from "../../types";
import './RecipeCard.css'

interface RecipeProps {
    recipe: Recipe
}

const RecipeCard = ({recipe}: RecipeProps) => {

    const ingredientsList = recipe.ingredients.map(x => <p id="recipe-card-ingredient">{x}</p>);

    return (
        <div id="recipe-card-container">
            <h3 id="recipe-card-title">{recipe.name}</h3>
            <hr/>
            <p>HP Restored: {recipe.health_restored}</p>
            {ingredientsList}
        </div>
    )
}

export default RecipeCard;