import React, { Component } from 'react';
import search from '../assets/svg/search.svg';

var styles = {
    searchBar: {
        border: '1px solid rgb(0, 0, 0, 0.2)',
        borderRadius: '12px',
        margin: '18px 30px',
        padding: '16px',
        opacity: 0.8,
        boxShadow: '0px 0px 3px 3px rgb(0, 0, 0, 0.1)',
    },

    searchContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0px 10px',
    },

    searchText: {
        fontSize: '16px',
        fontWeight: '700',
        color: 'rgb(0, 0, 0, 0.5)',

        padding: '0px',
        margin: '0px'
    }
}

class SearchBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='searchBar' style={styles.searchBar}>
                    <div className='searchContent' style={styles.searchContent}>
                        <p style={styles.searchText}>{this.props.text}</p>
                        <img src={search}></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;