import React, { Component } from 'react';
import backarrow from '../assets/svg/backarrow.svg';
import { Link } from 'react-router-dom';

var styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    title: {
        fontSize: '25px'
    },
    backArrow: {
        width: '25px',
        position: 'absolute',
        left: '8%'
    }
}

class HeaderBack extends Component {
    state = {  } 
    render() { 
        return (
            <div className='header' style={styles.header}>
                <Link to="/"><img src={backarrow} style={styles.backArrow} alt="arrow"></img></Link>
                <h1 style={styles.title}>Recipefy</h1>
                <div></div>
            </div>
        );
    }
}
 
export default HeaderBack;