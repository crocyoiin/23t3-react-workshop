import './ExampleComponent.css';
import { Recipe } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';

const ExampleComponent = () => {
    let cookbook:Recipe[] = [
        {
            name: "Spicy Meat and Seafood Fry",
            ingredients: ["Spicy Pepper", "Hyrule Bass", "Raw Meat"],
            health_restored: 3,
        },
        {
            name: "Egg Tart",
            ingredients: ["Bird Egg", "Goat Butter", "Cane Sugar", "Tabantha Wheat"],
            health_restored: 2,
        },
        {
            name: "Monster Curry",
            ingredients: ["Monster Extract", "Goron Spice", "Hylian Rice"],
            health_restored: 5,
        },
        {
            name: "Hearty Meat and Rice Bowl",
            ingredients: ["Raw Meat", "Rock Salt", "Hylian Rice"],
            health_restored: 3,
        },
        {
            name: "Salmon Risotto",
            ingredients: ["Hearty Salmon", "Rock Salt", "Hylian Rice", "Goat Butter"],
            health_restored: 4,
        },
        {
            name: "Seafood Paella",
            ingredients: ["Porgy", "Hearty Blueshell Snail", "Rock Salt", "Goat Butter", "Hylian Rice"],
            health_restored: 5,
        },
        {
            name: "Creamy Meat Soup",
            ingredients: ["Any meat", "Any herb, flower, or vegetable", "Fresh Milk", "Rock Salt"],
            health_restored: 3,
        }
    ]

    const recipesList = cookbook.map((x) => {
        return <RecipeCard recipe={x}/>
    });

    return (
        <>
            <div id="example-component-container">
                <h1>Wahoo this is a component</h1>
                <p>Very slay, very slay</p>

                <h1>Sample prop output</h1>
                {recipesList}
            </div>
        </>
    )
}

export default ExampleComponent;