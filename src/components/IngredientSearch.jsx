import React, { Component } from 'react';
import add from '../assets/svg/add.svg'

var styles = {
    box: {
        margin: '20px',
        backgroundColor: '#EBFFE2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
        overflowY: 'hidden',
        
    },

    textContent: {
        lineHeight: '10px',
        margin: '10px',
    },

    ingredientResume: {
        color: 'rgb(0, 0, 0, 0.5)',
        fontWeight: '600',
    },

    addIngredient: {
        backgroundColor: '#CDE9C1',
        width: '21%',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    addIcon: {
        color: 'EBFFE2',
        width: '48px',
    }
}

class IngredientSearch extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.box}>
                <div className='textContent' style={styles.textContent}>
                    <h3>{this.props.name}</h3>
                    <p style={styles.ingredientResume}>{this.props.description}</p>
                </div>

                <div className='addIngredient' style={styles.addIngredient}>
                    <img src={add} className='addIcon' style={styles.addIcon}></img>
                </div>
                
            </div>
        );
    }
}
 
export default IngredientSearch;