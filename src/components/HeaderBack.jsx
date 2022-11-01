import React, { Component } from 'react';
import backarrow from '../assets/svg/backarrow.svg';

var styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
}

class HeaderBack extends Component {
    state = {  } 
    render() { 
        return (
            <div className='header' style={styles.header}>
                <img src={backarrow} style={styles.backArrow}></img>
                <h1>Recipefy</h1>
                <div></div>
            </div>
        );
    }
}
 
export default HeaderBack;