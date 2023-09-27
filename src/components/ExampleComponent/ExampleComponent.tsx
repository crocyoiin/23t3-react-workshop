import './ExampleComponent.css';
import { Recipe } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';
import { recipes } from '../../pages/ExamplePage/sampleData';
import { useState } from 'react';

const ExampleComponent = () => {
    const [cookbook, setCookbook] = useState<Recipe[]>(recipes);

    const recipesList = cookbook.map((x) => {
        return <div><RecipeCard recipe={x}/></div>
    });

    return ( 
        <div id="example-component-container">
            {recipesList}
        </div>
    )
}

export default ExampleComponent;