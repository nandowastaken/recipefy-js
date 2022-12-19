import React, { Component } from 'react';
import bread from '../assets/imgs/bread.jpg'
import { Link } from 'react-router-dom';

var styles = {
    ingredient: {
        width: '120px',
        height: '170px',
        backgroundColor: '#FDFFE2',
        borderRadius: '8px',
        boxShadow: '0px 0px 2px 2px rgb(0, 0, 0, 0.045)',
        margin: '1rem'

    },

    ingredientImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    },

    ingredientImage: {
        width: '100%',
        borderRadius: '4px',
    },

    ingredientInfo: {
        width: '100%',
        height: '10%',
        fontSize: '14px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',

        margin: '0px 0px',
        padding: '5px 0px',
        
    },

    ingredientName: {
        fontWeight: '800',
        margin: '0px 10px',
        padding: '0px',

    },

    ingredientResume: {
        margin: '0px 10px',
        padding: '0px 0px 0px 0px',
        color: 'rgb(0, 0, 0, 0.5)',
        fontWeight: '600',
    },

}

class Ingredient extends Component {
    state = {  } 
    render() { 
        return (
                <div style={styles.ingredient}>
                    <Link to="/nutritional_facts" style={{textDecoration: 'none', color: 'rgba(0,0,0,0.7)'}}>
                        <div style={styles.ingredientImageContainer}>
                            <img src={bread} alt="Bread" style={styles.ingredientImage}/>
                        </div>

                        <div style={styles.ingredientInfo}>
                            <p style={styles.ingredientName}>Bread</p>
                            <p style={styles.ingredientResume}>100g - 265 kcal</p>
                        </div>     
                    </Link>        
                </div>
        );
    }
}
 
export default Ingredient;