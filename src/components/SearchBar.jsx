import React, { Component } from 'react';
import search from '../assets/svg/search.svg';
import filtro from '../assets/svg/filtro.svg'

var styles = {
    searchContainer: {
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    searchBar: {
        border: '1px solid rgb(0, 0, 0, 0.2)',
        borderRadius: '12px',
        margin: '10px 30px',
        padding: '16px',
        opacity: 0.8,
        boxShadow: '0px 0px 3px 3px rgb(0, 0, 0, 0.1)',
        width: "74%",
        fontSize: "16px",
        fontFamily: "Inter, sans-serif",
    },

    searchButton: {
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        margin: "0% 0px 0px 74%",
        width: "10%",
    },

    searchFilter: {
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        margin: "0% 0px 0px 90%",
        width: "10%",
    }

}

function clickButton() {
    alert("Clicked on the button...");
}

function clickFilter() {
    alert("filtring informations...");
}

class SearchBar extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.searchContainer}>
                <button type='submit' style={styles.searchButton} onClick={clickButton}><img src={search}></img></button>
                <input type="text" placeholder={this.props.text} name="search" style={styles.searchBar}></input>
                <button type='submit' style={styles.searchFilter} onClick={clickFilter}><img src={filtro}></img></button>  
            </div>
        );
    }
}
 
export default SearchBar;