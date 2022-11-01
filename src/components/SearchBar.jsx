import React, { Component } from 'react';
import search from '../assets/svg/search.svg';

var styles = {
    searchBar: {
        borderStyle: 'solid',
        borderWidth: '0.1px',
        borderRadius: '9px',
        margin: '15px',
        padding: '3px',
        opacity: 0.8,
        boxShadow: '0px 3px #888888',

        fontSize: '20px',
    },

    searchContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
}

class SearchBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='searchBar' style={styles.searchBar}>
                    <div className='searchContent' style={styles.searchContent}>
                        Search ingredients...
                        <img src={search}></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;