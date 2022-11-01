import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Ingredient from '../components/Ingredient';

var styles = {
    ingredients: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '10px',

    },

    recipes: {
        height: '50vh',
        width: '100%',
        backgroundColor: '#F2E5E5',

    },

    innerRecipesContent: {
        margin: '12px',
    }
}

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <SearchBar text='Search ingredients...'/>
                <div className='ingredients' style={styles.ingredients}>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                </div>

                <div className='recipes' style={styles.recipes}>
                    <div styles={styles.innerRecipesContent}>
                        <h2>Recipes</h2>
                        <SearchBar/>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default Home;