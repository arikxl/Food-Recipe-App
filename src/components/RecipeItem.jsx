import React from 'react'

const RecipeItem = ({recipe}) => {
    console.log('recipe:', recipe)
    return (
        <div>
            {recipe.recipe.label}
        </div>
    )
}

export default RecipeItem
