import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import FunctionalSearchBar from '../components/FunctionalSearchBar';
import IngredientSearch from '../components/IngredientSearch';

class Search extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>
                <FunctionalSearchBar text='Search ingredient...'/>
                <IngredientSearch name='PINEAPPLE' description='100g - 50kcal'/>
                <IngredientSearch name='PITAHAYA' description='100g - 50kcal'/>
            </div>
        );
    }
}
 
export default Search;