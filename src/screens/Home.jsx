import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Ingredient from '../components/Ingredient';
import FunctionalSearchBar from '../components/FunctionalSearchBar';

var styles = {
    homeContainer: {
        width: '100vw',
        height: '100vh'
    },

    ingredients: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        padding: '10px',

    },

    recipes: {
        height: '50vh',
        width: '100%',
        backgroundColor: '#F2E5E5',
    },

    innerRecipesContent: {   
        
    },

    recipesTitle: {
        margin: '20px 20px 10px 10px',
        fontWeight: '550',
    }
}

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='homeContainer'>
                <Navbar/>
                <FunctionalSearchBar text="Search ingredients..."/>
                

                <div className='ingredients' style={styles.ingredients}>
                    <Ingredient/>
                    
                </div>

                <div className='recipes' style={styles.recipes}>
                    <div styles={styles.innerRecipesContent}>
                        <h2 style={styles.recipesTitle}>Recipes</h2>
                        <FunctionalSearchBar text='Search recipes...' />
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default Home;