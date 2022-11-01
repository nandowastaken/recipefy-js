import React, { Component } from 'react';
import backarrow from '../assets/svg/backarrow.svg';

var styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    settings: {
        margin: '15px',
    }


}

class Menu extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='header' style={styles.header}>
                    <img src={backarrow} style={styles.backArrow}></img>
                    <h1>Recipefy</h1>
                    <div></div>
                </div>

                <div className='settings' style={styles.settings}>
                    <div className='favorites' style={styles.favorites}>
                        <h3>Favorites</h3>
                        <hr size='1' width='90%' color='black'></hr>
                    </div>

                    <div className='userSettings' style={styles.userSettings}>
                        <h2>User Settings</h2>
                        <div className='userSettingsOptions' style={styles.userSettingsOptions}>
                            <h3>Edit Profile</h3>
                            <hr size='1' width='90%' color='black'></hr>
                            <h3>My Account</h3>
                            <hr size='1' width='90%' color='black'></hr>
                            <h3>Disconnect</h3>
                        </div>
                        <hr size='1' width='90%' color='black'></hr>
                    </div>

                    <div className='generalSettings' style={styles.generalSettings}>
                        <h2>General Settings</h2>
                        <div className='generalSettingsOptions' style={styles.generalSettingsOptions}>
                            <h3>Appearance</h3>
                            <hr size='1' width='90%' color='black'></hr>
                            <h3>Language</h3>
                        </div>
                        <hr size='1' width='90%' color='black'></hr>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Menu;