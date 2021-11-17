import React from 'react';

const RecipeDetails = ({ ingredients }) => {
    return (
        <div>
            {ingredients.map((ingredient, index) => (
                <ul className="ingredient-list" key={index}>
                    <li className="ingredient-text">
                        {ingredient.text}
                    </li>
                    <li className="ingredient-weight">
                    Weight:  {ingredient.weight}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default RecipeDetails;
