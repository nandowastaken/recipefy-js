import React, { Component } from 'react';
import search from '../assets/svg/search.svg';
import { Link } from 'react-router-dom';

var styles = {
    searchContainer: {
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    searchBar: {
        border: '1px solid rgb(0, 0, 0, 0.1)',
        borderRadius: '12px',
        margin: '18px 30px',
        padding: '16px',
        opacity: 0.8,
        boxShadow: '0px 0px 3px 3px rgb(0, 0, 0, 0.05)',
        width: "90%",
        fontSize: "16px",
        fontFamily: "Inter, sans-serif",
    },

    searchButton: {
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        margin: "0% 0px 0px 69%",
        width: "10%",
    }
}

class FunctionalSearchBar extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.searchContainer}>
                <input type="text" placeholder={this.props.text} name="search" style={styles.searchBar}></input>
                <button type='submit' style={styles.searchButton}><Link to="/search"><img src={search}></img></Link></button>
                
            </div>
        );
    }
}
 
export default FunctionalSearchBar;