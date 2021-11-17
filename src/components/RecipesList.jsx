import React from 'react';

import RecipePreview from './RecipePreview';

const RecipesList = ({ recipes }) => {

    return (
        <div className="recipes">
            {recipes && recipes.map((recipe, index) =>
                <RecipePreview recipe={recipe} key={index} />
            )}
        </div>
    );
};

export default RecipesList;
