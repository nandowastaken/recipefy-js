import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Ingredient from '../components/Ingredient';

var styles = {
    homeContainer: {
        width: '100vw',
        height: '100vh'
    },

    ingredients: {
        width: '100%',
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
        margin: '12px',
    }
}

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='homeContainer'>
                <Navbar/>
                <SearchBar text='Search ingredients...'/>

                <div className='ingredients' style={styles.ingredients}>
                    <Ingredient/>
                    
                </div>

                <div className='recipes' style={styles.recipes}>
                    <div styles={styles.innerRecipesContent}>
                        <h2>Recipes</h2>
                        <SearchBar text='Search recipes...'/>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default Home;