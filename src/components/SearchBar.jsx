import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RecipesList from './RecipesList';


const SearchBar = () => {

    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState([]);

    const APP_ID = 'b6c0734a';
    const APP_KEY = '8fea59aa18718d20f0c76894d9fdaf65';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async (req, res) => {
        const result = await axios.get(url);
        setRecipes(result.data.hits)
    };

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData(query);
        setQuery('');
    };


    return (
        <>
            <form className="search-form" onSubmit={onSubmit}>
                <input type="text" placeholder="Search Food" autoComplete="off"
                    onChange={onChange} value={query} />
                <input type="submit" value="Search" />
            </form>

            <RecipesList recipes={recipes}/>
     
        </>
    )
}

export default SearchBar
