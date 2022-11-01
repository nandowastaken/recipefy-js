import React, { Component } from 'react';
import bread from '../assets/imgs/bread.jpg'

var styles = {
    box: {
        width: '40%',
        
        
        backgroundColor: '#FDFFE2'

    },

    ingredientImage: {
        width: '100%',
        height: '100%',
        margin: '10px',
    },

    ingredientInfo: {
        display: 'flex',
        flexDirection: 'column',
    }
}

class Ingredient extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.box}>
                <img src={bread} style={styles.ingredientImage}></img>
                <div style={styles.ingredientInfo}>
                    <h3>Bread</h3>
                    <p>100g - 265kcal</p>
                </div>
                
            </div>
        );
    }
}
 
export default Ingredient;