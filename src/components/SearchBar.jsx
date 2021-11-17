import axios from 'axios';
import React, { useState } from 'react';

import RecipesList from './RecipesList';
import Alert from './Alert';

const SearchBar = () => {

    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState('');

    const APP_ID = 'b6c0734a';
    const APP_KEY = '8fea59aa18718d20f0c76894d9fdaf65';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert('No Food With Such Name')
            }
            setRecipes(result.data.hits)
            setAlert('')
        } else {
            setAlert('Please Try To Find Food')
        }
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
                {alert !== "" && <Alert alert={alert} />}
                <input type="text" placeholder="Search Food" autoComplete="off"
                    onChange={onChange} value={query} />
                <input type="submit" value="Search" />
            </form>

            <RecipesList recipes={recipes} />

        </>
    );
};

export default SearchBar;
