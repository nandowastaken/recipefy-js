import React, { Component } from 'react';
import backarrow from '../assets/svg/backarrow.svg';
import { Link } from 'react-router-dom';

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
                <Link to="/"><img src={backarrow} style={styles.backArrow}></img></Link>
                <h1>Recipefy</h1>
                <div></div>
            </div>
        );
    }
}
 
export default HeaderBack;