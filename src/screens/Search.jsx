import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import SearchBar from '../components/SearchBar';
import IngredientSearch from '../components/IngredientSearch';

class Search extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>
                <SearchBar text='Search ingredient...'/>
                <IngredientSearch name='PINEAPPLE' description='100g - 50kcal'/>
                <IngredientSearch name='PITAHAYA' description='100g - 50kcal'/>
            </div>
        );
    }
}
 
export default Search;