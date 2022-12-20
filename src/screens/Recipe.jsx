import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import Tags from '../components/Tags';
import Infos from '../components/Infos';
import PremiumList from '../components/PremiumList';
import potato from '../assets/imgs/potato.jpg'
import { Link } from 'react-router-dom';

var styles = {
    tags: {
        display: 'flex',
        flexDirection: 'rows',
        justifyContent: 'space-around',
        margin: '10px 30px',
    },
    Info: {
        display: 'flex',
        flexDirection: 'rows',
        justifyContent: 'space-around',
        margin: '10px 30px',
        backgroundColor: '#D9D9D9',
        textAlign: 'center',
    },
    lists: {
        marginLeft: '30px',
    }
}

class Recipe extends Component{
    state = {};
    render(){
        return(
            <div>
                <HeaderBack/>
                <div className='Tags' style={styles.tags}>
                    <h1>Recipe</h1>
                    <img src={potato} style={ styles.profilePicture }></img>
                </div>
                <div style={styles.Info}>
                    <Infos text='Prepare Time: 30Min'></Infos>
                    <Infos text='Yields: 4 Portions'></Infos>
                    <Infos text='Favorites: 413 Likes'></Infos>
                </div>
                <hr size='2' width='85%' color='black'></hr>   
                <div style={styles.lists}>
                    <PremiumList text='1 Ingredient'></PremiumList>
                    <PremiumList text='1 Ingredient'></PremiumList>
                    <PremiumList text='1 Ingredient'></PremiumList>
                    <PremiumList text='1 Ingredient'></PremiumList>
                </div>
                <hr size='1' width='85%' color='black'></hr>   
                <div style={styles.lists}>
                    <h2>Previusly Recipe</h2>
                    <PremiumList text='1 Ingredient'></PremiumList>
                    <PremiumList text='1 Ingredient'></PremiumList>
                    <PremiumList text='1 Ingredient'></PremiumList>
                    <PremiumList text='1 Ingredient'></PremiumList>
                </div>
                <hr size='2' width='85%' color='black'></hr>   
                <div style={styles.lists}>
                    <h2>Prepare Way</h2>
                    <PremiumList text='1 Do This'></PremiumList>
                    <PremiumList text='2 Do This'></PremiumList>
                    <PremiumList text='3 Do This'></PremiumList>
                    <PremiumList text='4 Do This'></PremiumList>
                </div>
            </div>
        );
    }
}

export default Recipe;