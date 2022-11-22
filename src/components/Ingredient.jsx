import React, { Component } from 'react';
import bread from '../assets/imgs/bread.jpg'

var styles = {
    ingredient: {
        width: '45%',
        height: '25.8vh',
        backgroundColor: '#FDFFE2',
        borderRadius: '14px',
    },

    ingredientImageContainer: {
        width: '90%',
        margin: '10px',
    },

    ingredientImage: {
        width: '100%',
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
        padding: '0px',
        
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
        fontWeight: '700',
    }
}

class Ingredient extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.ingredient}>
                <div style={styles.ingredientImageContainer}>
                    <img src={bread} alt="Bread" style={styles.ingredientImage}/>
                </div>

                <div style={styles.ingredientInfo}>
                    <p style={styles.ingredientName}>Bread</p>
                    <p style={styles.ingredientResume}>100g - 265 kcal</p>
                </div>
                
                
            </div>
        );
    }
}
 
export default Ingredient;