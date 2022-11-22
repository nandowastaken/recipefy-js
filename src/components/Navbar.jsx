import React, { Component } from 'react';
import women from '../assets/imgs/women.jpg'
import hamburger from '../assets/svg/hamburger.svg'

var styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '10px'
    },

    title: {
        fontSize: '20px',
    },

    hamburger: {
        width: '30px',
        width: '30px',
    },

    profilePicture: {
        borderRadius: '100%',
        width: '45px',
        height: '45px'
    }
}

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.navbar}>
                <img src={hamburger} style={styles.hamburger}></img>
                <h1 className='title' style={styles.title}>RECIPEFY</h1>
                <img src={women} style={styles.profilePicture}></img>
                
            </div>
        );
    }
}
 
export default Navbar;