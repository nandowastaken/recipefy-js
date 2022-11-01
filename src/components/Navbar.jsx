import React, { Component } from 'react';
import women from '../assets/imgs/women.jpg'
import hamburger from '../assets/svg/hamburger.svg'

var styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'

    },

    hamburger: {
        width: '28px',
        width: '28px',
    },

    profilePicture: {
        borderRadius: '60px',
        width: '48px',
        height: '48px'
    }
}

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.navbar}>
                <img src={hamburger} style={styles.hamburger}></img>
                {/* 
                Functional menu, not done yet.
                <div className='hamburger'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                */}

                <h1 className='title'>Recipefy</h1>

                <img src={women} style={styles.profilePicture}></img>
                
            </div>
        );
    }
}
 
export default Navbar;