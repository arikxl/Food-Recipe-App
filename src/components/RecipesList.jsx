import React from 'react';

import RecipeItem from './RecipeItem';

const RecipesList = ({recipes}) => {

    return (
        <div className="recipes">
            {recipes.length && recipes.map((recipe, index) =>
                <RecipeItem recipe={recipe} key={index}/>
            )}
        </div>
    )
}

export default RecipesList;
