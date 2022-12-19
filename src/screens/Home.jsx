import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Ingredient from '../components/Ingredient';
import FunctionalSearchBar from '../components/FunctionalSearchBar';

var styles = {
    homeContainer: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
    },
 
    ingredientsConteiner: {
        overflowX: 'scroll'
    },

    ingredients: {
        display: 'flex',
        flexDirection: 'row',
        width: '170%'
        
    },

    recipes: {
        height: '100vh',
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

                <div className="ingredientsConteiner"  style={styles.ingredientsConteiner}>
                    <div className='ingredients' style={styles.ingredients}>
                        {Array(4).fill(<Ingredient/>)}
                    </div>
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
